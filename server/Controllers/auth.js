import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import User from "../modals/user.js";
import Program from "../modals/Program.js";
import { pagination } from "../common/pagination.js";


export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userType } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      userType,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// logging in

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    const token = Jwt.sign(
      {
        id: user._id,
        userType: user.userType,
        name: user.firstName + " " + user.lastName,
        email: user.email,
      },
      process.env.JWT_SECRET
    );
    delete user.password;

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const searchProgram = async (req, res) => {
  let data = {};
  try {
    const {
      courses,
      intakeMonth,
      intakeYear,
      page_no,
      number_of_rows,
      requirements,
    } = req.query;
    console.log(req.query);
    let matchedObject = {};
    if (courses) {
      const escaped_search_text = courses.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      matchedObject = {
        Name: { $regex: escaped_search_text, $options: "ims" },
      };
    }

    if (intakeMonth) {
      matchedObject.intake = intakeMonth;
    }

    if (intakeYear) {
      matchedObject.year = Number(intakeYear);
    }

    if (requirements) {
      let arr = JSON.parse(requirements);
      for (const elem of arr) {
        if (elem === "GMAT") {
          matchedObject.GmatRequired = true;
        }
        if (elem === "SAT") {
          matchedObject.SatRequired = true;
        }
        if (elem === "IELTS") {
          matchedObject.IeltsRequired = true;
        }
        if (elem === "TOEFL") {
          matchedObject.ToeflRequired = true;
        }
        if(elem==="PTE"){
          matchedObject.PteRequired = true;
        }
        if(elem==="DET"){
          matchedObject.DETRequired = true;
        }
        if(elem==="ACT"){
          matchedObject.ActRequired = true;
        }
        if(elem==="GRE"){
          matchedObject.GreRequired = true;
        }
        if(elem==="Without English Proficiency"){
          matchedObject.WithoutEnglishProficiency = true;
        }
        
        if(elem==="Without Maths"){
          matchedObject.WithoutMaths = true;
        }
        if(elem==="Application Fee Waiver (upto 100%)"){
          matchedObject.AppFeeWaiverAvailable = true;
        }
        if(elem==="Scholarship Available"){
          matchedObject.ScholarshipAvailable = true;
        }
      }
    }

    let allPrograms = await Program.aggregate([
      {
        $match: matchedObject,
      },
      {
        $facet: {
          totalCount: [{ $count: "count" }],
          paginatedResults: [
            {
              $skip: Number(pagination(page_no, number_of_rows).skipDocuments),
            },
            {
              $limit: Number(pagination(page_no, number_of_rows).getDocuments),
            },
          ],
        },
      },
      { $unwind: "$totalCount" },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              "$totalCount",
              { paginatedResults: "$paginatedResults" },
            ],
          },
        },
      },
    ]);

    data = allPrograms;
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

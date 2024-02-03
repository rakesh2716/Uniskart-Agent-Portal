import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import User from "../modals/user.js";

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



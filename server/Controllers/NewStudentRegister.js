import StudentRegistration from "../modals/studentRegister.js";

export const registerStudent = async (req, res) => {
    try {
      const { firstName, middleName, lastName, email, phoneNo } = req.body;
  
      const newStudent = new StudentRegistration({
        firstName,
        middleName,
        lastName,
        email,
        phoneNo,
      });
      const existingStudentByEmail = await StudentRegistration.findOne({ email: email });
      const existingStudentByPhone = await StudentRegistration.findOne({ phoneNo: phoneNo });
      if (existingStudentByEmail && existingStudentByPhone) {
          return res.status(400).json({ error: "Email and phone number already exist" });
      } else if (existingStudentByEmail) {
          return res.status(400).json({ error: "Email already exists" });
      } else if (existingStudentByPhone) {
          return res.status(400).json({ error: "Phone number already exists" });
      }
      const savedStudent = await newStudent.save();
  
      const responseData = {
        _id: savedStudent._id,
        firstName: savedStudent.firstName,
        middleName: savedStudent.middleName,
        lastName: savedStudent.lastName,
        email: savedStudent.email,
        phoneNo: savedStudent.phoneNo,
      };
  
      return res.status(201).json(responseData);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
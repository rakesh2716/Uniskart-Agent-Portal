import mongoose from "mongoose";

const studentResSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: Number, required: true },
})
const StudentRegistration = mongoose.model("registerStudent", studentResSchema);
export default StudentRegistration
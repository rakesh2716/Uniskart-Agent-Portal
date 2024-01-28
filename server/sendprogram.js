import db from "./MongoDb.js";
import Program from "./modals/Program.js";
import dotevn from "dotenv"
import ProgramJson from "./Program.json" assert { type: "json" };
dotevn.config()
const addJson = async () =>{
try {
    await db(process.env.MONGOOSE_URL)
    await Program.create(ProgramJson)
} catch (error) {
    console.log("failed",error);
}    
}
addJson()
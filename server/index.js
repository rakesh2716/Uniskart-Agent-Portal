import express from "express"
import bodyParser from "body-parser"

import cors from "cors";
import dotevn from "dotenv"
import path from "path"
import { fileURLToPath } from "url";
import helmet from "helmet";
import connectToMongoDB from "./MongoDb.js";
import authRoutes from "./routes/Routes.js"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotevn.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/api/v1/", authRoutes);
const PORT = process.env.PORT || 9000;
connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => console.error(`Failed to connect to MongoDB: ${error}`));

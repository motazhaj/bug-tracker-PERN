import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

//middleware
app.use(cors());
app.use(express.json()); // allows req.body access

app.listen(port, () => {
  console.log("Server is starting on port: " + port);
});

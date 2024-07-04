import express from "express";
import cors from "cors";

const port = 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json()); // allows req.body access

app.listen(5000, () => {
  console.log("Server is starting on port: " + port);
});

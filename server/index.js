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

//routes
app.get("/bugs", async (req, res) => {
  try {
    const bugs = await pool.query("SELECT * FROM bugs");
    res.json(bugs.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/bugs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bug = await pool.query("SELECT * FROM bugs WHERE bug_id = $1", [id]);
    res.json(bug.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/newbug", async (req, res) => {
  try {
    const { name } = req.body;
    const newBug = await pool.query("INSERT INTO bugs (name, resolved) VALUES ($1, $2) RETURNING *", [name, false]);
    res.json(newBug.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/bugs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, resolved } = req.body;

    const updateBug = await pool.query(
      "UPDATE bugs SET name = COALESCE($2, name), resolved = COALESCE($3, resolved) WHERE bug_id = $1 RETURNING *",
      [id, name, resolved]
    );

    res.json(updateBug.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log("Server is starting on port: " + port);
});

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
    const { title, description } = req.body;
    const newBug = await pool.query("INSERT INTO bugs (title, description) VALUES ($1,$2) RETURNING *", [
      title,
      description,
    ]);
    console.log(newBug.rows[0]);
    res.json(newBug.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/bugs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, resolved } = req.body;
    console.log(req.body);
    const updateBug = await pool.query(
      "UPDATE bugs SET title = COALESCE($2, title),description = COALESCE($3, description), resolved = COALESCE($4, resolved), updateDate = current_timestamp WHERE bug_id = $1 RETURNING *",
      [id, title, description, resolved]
    );

    res.json(updateBug.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/resolvebug/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { resolved } = req.body;

    const updateBug = await pool.query(
      "UPDATE bugs SET resolved = COALESCE($2, resolved), updateDate = current_timestamp WHERE bug_id = $1 RETURNING *",
      [id, resolved]
    );
    console.log(req.body);
    res.json(updateBug.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/bugs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM bugs WHERE bug_id = $1;", [id]);
    res.json("Bug was deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log("Server is starting on port: " + port);
});

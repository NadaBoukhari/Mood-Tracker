const express = require("express");
const pool = require("./database");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/moods", async (req, res) => {
  try {
    const allMoods = await pool.query("SELECT * FROM moods");
    res.send(allMoods.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/moods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mood = await pool.query("SELECT * FROM moods WHERE mood_id = $1", [
      id,
    ]);
    res.json(mood.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/moods", async (req, res) => {
  try {
    const mood = req.body;
    const newEntry = await pool.query(
      "INSERT INTO moods (mood_type, mood_color, mood_description) VALUES ($1, $2, $3) RETURNING *",
      [mood.type, mood.color, mood.description]
    );
    res.json(newEntry.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/moods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMood = await pool.query("DELETE FROM moods WHERE mood_id=$1", [
      id,
    ]);

    res.json(`Mood with ID ${id} has been deleted`);
  } catch (error) {
    console.log(error.message);
  }
});

app.put("/moods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const moodDescription = req.body;
    const updatedMood = await pool.query(
      "UPDATE moods SET mood_type=$1, mood_color=$2, mood_description=$3 WHERE mood_id=$4",
      [
        moodDescription.type,
        moodDescription.color,
        moodDescription.description,
        id,
      ]
    );
    res.json(`Mood with ID ${id} has been updated`);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

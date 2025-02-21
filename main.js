import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hi welcome to express" });
});

//CRUD functionality of movies

//R- for reading
app.get("/movies", () => {});

//c- for creating movie
app.post("/movies", () => {});

//U- for updating
app.put("/movies/:id", () => {});

//D- for deleting movie
app.delete("/movies/:id", () => {});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

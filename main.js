import express from "express";
import movieRoutes from "./routes/movies.routes.js";
const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hi welcome to express" });
});

//CRUD functionality of movies
// client --> middleware --> server
app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

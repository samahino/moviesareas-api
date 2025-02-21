import express from "express";

const router = express.Router();
//R- for reading
router.get("/", (req, res) => {
  res.send("Get all movie lists");
});

//c- for creating movie
router.post("/", (req, res) => {
  res.send("create movie lists");
});

//U- for updating
router.put("/:id", (req, res) => {
  res.send("Update movie lists");
});

//D- for deleting movie
router.delete("/:id", (req, res) => {
  res.send("Delete movie lists");
});

export default router;

import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movie.controller.js";

const router = express.Router();
//R- for reading
router.get("/", MovieIndex);

//c- for creating movie
router.post("/", MovieCreate);

//U- for updating
router.put("/:id", MovieUpdate);

//D- for deleting movie
router.delete("/:id", MovieDelete);

export default router;

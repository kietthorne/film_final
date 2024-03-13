import express from "express";
import {
  movieController,
  uploadImage,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/movies", movieController.getAllMovies);
router.get("/movies/search", movieController.searchMovies);
router.get("/movies/:id", movieController.getMovieById);
router.post("/movies", movieController.createMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);
router.get("/movies/sortedByYear/:order", movieController.sortMoviesByYear);

export default router;

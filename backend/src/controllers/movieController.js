import MovieModel from "../models/movieModel.js";
import path from 'path';
import fs from 'fs/promises';

const movieController = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await MovieModel.find();
      res.json(movies);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  searchMovies: async (req, res) => {
    const { query } = req.query;

    try {
      const movies = await MovieModel.find({
        name: { $regex: query, $options: "i" },
      });
      res.json(movies);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  getMovieById: async (req, res) => {
    try {
      const movie = await MovieModel.findOne({ _id: req.params.id });
      if (movie) {
        res.json(movie);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  createMovie: async (req, res) => {
    try {
      const movie = await MovieModel.create(req.body);
      res.json(movie);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  updateMovie: async (req, res) => {
    try {
      const movie = await MovieModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (movie) {
        res.json(movie);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  deleteMovie: async (req, res) => {
    try {
      const movie = await MovieModel.findOneAndDelete({ _id: req.params.id });
      if (movie) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  sortMoviesByYear: async (req, res) => {
    const { order } = req.params;

    try {
      let movies;
      if (order === "asc") {
        movies = await MovieModel.find().sort({ year: 1 });
      } else if (order === "desc") {
        movies = await MovieModel.find().sort({ year: -1 });
      } else {
        return res.status(400).json({ message: "Invalid sorting order" });
      }
      res.json(movies);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};

const uploadImage = async (req, res) => {
  try {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "../uploads/image.png");
    await fs.rename(tempPath, targetPath);

    const { filmId } = req.body;
    const imageUrl = "/uploads/image.png";

    const updatedFilm = await Film.findByIdAndUpdate(
      filmId,
      { imageUrl },
      { new: true }
    );
    res.status(200).json(updatedFilm);
  } catch (error) {
    console.error(error);
    res.status(500).send("Upload failed");
  }
};

export { movieController, uploadImage };

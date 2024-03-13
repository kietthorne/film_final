import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  introduce: {
    type: String,
    required: true,
  },
});

const MovieModel = mongoose.model("Movie", MovieSchema);

export default MovieModel;

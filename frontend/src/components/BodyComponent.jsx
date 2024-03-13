import React, { useEffect, useState } from "react";
import MoviesList from "./MovieList";
import axios from "axios";

const BodyComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/movies");
        setMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error loading data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "20px 44px",
        }}
      >
        Most Popular Movies
      </div>
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default BodyComponent;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage(props) {
  const route_parameters = useParams();
  const [movieData, set_movieData] = useState({});
  useEffect(() => {
    async function fetchMovieData(imdb_Id) {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=1c78258e&i=${imdb_Id}`
      );
      set_movieData(response.data);
      console.log("response.data:", response.data);
      console.log("moviedata:", movieData);
    }
    fetchMovieData(route_parameters.imdbId);
  }, []);
  return (
    <div>
      Title: <b>{movieData.Title} </b>
      <br />
      <p>Plot: {movieData.Plot}</p>
      <p> Genre: {movieData.Genre}</p>
      <p>
        Actors: <b>{movieData.Actors}</b>
      </p>
      <Link to="/discover">Back to Discover Movies</Link>
    </div>
  );
}

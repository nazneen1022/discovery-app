import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [appState, setAppState] = useState("idle");

  async function fetchData() {
    const queryParam = encodeURIComponent(searchText);

    try {
      setAppState("searching ...");

      const response = await axios.get(
        `https://omdbapi.com/?apikey=1c78258e&s=${queryParam}`
      );
      //console.log("response.data.Search -->", response.data.Search);
      setMovies(response.data.Search);
      setAppState("Done!!");

      //console.log(`test response`, movies);
    } catch (error) {
      return error.data;
    }
  }

  if (appState === "searching ...") {
    return (
      <div className="AllPages">
        <p>Discover Movies here...</p>
        <div>
          <label>Search for movie here: </label>
          <input
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button onClick={() => fetchData()}> Go </button>
        </div>
        <b>Searching...</b>
      </div>
    );
  }

  return (
    <div className="AllPages">
      <p>Discover some movies!!</p>
      <div>
        <label>Search for movies here: </label>
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button onClick={() => fetchData(searchText)}> Go </button>
        <div className="container">
          <div class="row equal">
            {movies.map((movie) => {
              return (
                <div class="col-sm-4 d-flex pb-3">
                  <div class="card card-block">
                    <h4>
                      <b></b>Title: {movie.Title}
                      <b></b>
                    </h4>
                    <p class="card-text">
                      <Link to={`/discover/${movie.imdbID}`}>
                        <img src={movie.Poster} alt="" />
                      </Link>
                      <br />
                      Type: <b>{movie.Type} </b>
                      <br />
                      {movies.Year}
                      Year: <b>{movie.Year}</b>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

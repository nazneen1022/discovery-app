import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// custom
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";
import MoviePage from "./Pages/MoviePage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <main>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/discover" component={DiscoverMoviesPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route exact={true} path="/" component={HomePage}></Route>
          <Route path="/discover/:imdbId" component={MoviePage}></Route>
        </Switch>
      </div>
    </main>
  );
}

export default App;

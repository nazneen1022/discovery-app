import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// custom
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar class="NavBar" />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;

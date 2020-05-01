import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/discover">Discover Movies</NavLink>
      </li>
    </ul>
  );
}

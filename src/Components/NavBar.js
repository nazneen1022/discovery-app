import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul class="nav">
        <li>
          <NavLink to="/" style={{ fontWeight: "bold" }}>
            <u>Home</u>
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" style={{ fontWeight: "bold" }}>
            <u>About</u>
          </NavLink>
        </li>
        <li>
          <NavLink to="/discover" style={{ fontWeight: "bold" }}>
            <u>Discover Movies</u>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

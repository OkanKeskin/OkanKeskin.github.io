import React from "react";
import { NavLink } from "react-router-dom";

//css
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="div">
        <div className="logo">
          <h1>Okan Keskin</h1>
        </div>
        <nav>
          <ul className="nav-ul">
            <li>
              <NavLink
                className="btn"
                to="/"
                style={({ isActive }) => ({
                  color: isActive
                    ? "rgba(146, 82, 8, 0.897)"
                    : "rgba(0, 0, 0, 0.548)",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn"
                to="/cv"
                style={({ isActive }) => ({
                  color: isActive
                    ? "rgba(146, 82, 8, 0.897)"
                    : "rgba(0, 0, 0, 0.548)",
                })}
              >
                CV
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn"
                to="/portfolio"
                style={({ isActive }) => ({
                  color: isActive
                    ? "rgba(146, 82, 8, 0.897)"
                    : "rgba(0, 0, 0, 0.548)",
                })}
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

//css
import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>
            okN
            <br />
            kskn
        </h2>
      </div>

      <div className="nav">
          <ul className="nav-ul">
            <li>
              <NavLink
                className="btn"
                to="/"
                style={({ isActive }) => ({
                  color: isActive
                    ? "rgba(146, 82, 8, 0.897)"
                    : "#909096",
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
                    : "#909096",
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
                    : "#909096",
                })}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn"
                to="/portfolio"
                style={({ isActive }) => ({
                  color: isActive
                    ? "rgba(146, 82, 8, 0.897)"
                    : "#909096",
                })}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn"
                to="/portfolio"
                style={({ isActive }) => ({
                  color: isActive
                    ? "rgba(146, 82, 8, 0.897)"
                    : "#909096",
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

    </div>
  );
}

export default Sidebar;

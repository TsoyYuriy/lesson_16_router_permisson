import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Landing
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Analytics
        </NavLink>
        <NavLink
          to="/admin-panel"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Admin Panel
        </NavLink>
      </nav>
    </header>
  );
};

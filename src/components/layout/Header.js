import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkSyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkSyle} to="/about">
        About
      </Link>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkSyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;

import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Link to="/list">list</Link>
      <Link to="/posts">posts</Link>
      <Link to="/add">add</Link>
    </nav>
  );
};

export default NavBar;

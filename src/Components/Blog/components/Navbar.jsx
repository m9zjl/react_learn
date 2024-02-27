import React, { useContext } from "react";
import cloud_icon from "../../Assets/cloud.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContent";

const Navbar = () => {
  const categories = [
    { name: "ART", link: "/?cat=art" },
    { name: "DESIGN", link: "/?cat=design" },
    { name: "CINEMA", link: "/?cat=cinema" },
    // { name: "FOOD", link: "/?cat=food" },
  ];

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <Link className="link" to="/">
          <div className="logo">
            <img src={cloud_icon} alt="logo" />
          </div>
        </Link>
        <div className="links">
          {categories.map((category, index) => (
            <Link className="link" to={category.link} key={index}>
              <h6>{category.name}</h6>
            </Link>
          ))}
          <span>{currentUser ? currentUser.username : ""}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span>
            <Link className="newNote" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import cloud_icon from "../../Assets/cloud.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    { name: "ART", link: "/?cat=art" },
    { name: "DESIGN", link: "/?cat=design" },
    { name: "CINEMA", link: "/?cat=cinema" },
    // { name: "FOOD", link: "/?cat=food" },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={cloud_icon} alt="logo" />
        </div>
        <div className="links">
          {categories.map((category, index) => (
            <Link className="link" to={category.link} key={index}>
              <h6>{category.name}</h6>
            </Link>
          ))}

          <span>m9zjl</span>
          <span>Logout</span>
          <span>
            <Link className="write" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

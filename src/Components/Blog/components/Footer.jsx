import React from "react";
import footer_icon from "../../Assets/snow.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={footer_icon} alt="footer icon" />
      <span>
        Made with ❤️‍🔥 and <b>React.js</b>
      </span>
    </footer>
  );
}

export default Footer;

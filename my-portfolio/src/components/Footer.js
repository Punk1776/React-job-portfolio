import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <a href="https://github.com/Punk1776" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/matthew-miller-b7765229a/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
        <p>&copy; 2023 Matthew-Miller.com</p>
      </div>
    );
  }
  
  export default Footer;
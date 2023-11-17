import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Matthew Miller</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://github.com/Punk1776" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/matthew-miller-b7765229a/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
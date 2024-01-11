import React from 'react';
import '../styles/About.css';
import myImage from '../assets/Logo_mm.png'; 
import cert from '../assets/pic-of-cert.PNG';
const About = () => {
  // Define your skills as an array
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'MongoDB',
    'SQL',
    'express',
    'NoSQL',
  ];

  return (
    <div>
      <h1>About Me</h1>
      <img src={myImage} alt="Logo" className="my-photo" />
      <p>
        Welcome to my personal website! My name is Matthew, and I am a passionate
        web developer with knowledge in full-stack development. I love creating innovative and user-friendly web applications that solve real-world problems as well 
        as problem-solving others websites.
      </p>
      
      <p>
        In my free time, I enjoy playing video games, going to the gym, and hiking. Feel free to explore my
        portfolio to see some of the projects I've worked on, below is my skills along with my certificate in full stack development also take a look at my Resume.
      </p>

     
      <p>
        Check out my resume: <a href="https://docs.google.com/document/d/1FsuJSMmiTY7aePSroNJvbOoCZmM0uFQbpqYe3s-eKtU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </p>
      <div>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}

           <img src={cert} alt="Certificates" className="cert-pic" />
        </ul>
      </div>

      <p>
        Thank You!
      </p>
    </div>
  );
};

export default About;
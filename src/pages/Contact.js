import React from "react";
//import { useHistory } from 'react-router-dom';
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
//import GithubIcon from "@material-ui/icons/GitHub";
//import { AiFillPhone } from "react-icons/ai";
import "../styles/Home.css";

function Home() {
  
  return (
    <div className="contact">
      <div className="skills">
        <h1> Kontakt</h1>
        <ol className="list">
          <li className="item">
            <h2> Telefonnummer</h2>
            <span>
              +49 179 4376946
            </span>
          </li>
          <li className="item">
            <h2>Email Adresse</h2>
            <span>
              polydorketchaba@gmail.com
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

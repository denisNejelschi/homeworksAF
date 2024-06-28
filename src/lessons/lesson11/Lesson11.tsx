import React from "react";
import CatFacts from "../../components/catFacts/CatFacts";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./lesson11.css";

export default function Lesson11() {
  return (
    <div>
      <h1>Lesson11 
      <a href="https://github.com/denisNejelschi/homeworksAF/tree/master/src/components/catCard" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
      
        
      </h1>
      <CatFacts />
      
    </div>
  );
}

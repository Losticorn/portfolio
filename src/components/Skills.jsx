import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import "./Skills.css";
import imgHTML from "/public/free-html-5-1-1175208.webp";
import imgCSS from "/public/css-icon.webp";
import imgJS from "/public/javascript-js-icon-2048x2048-nyxvtvk0.png";
import imgSASS from "/public/1280px-Sass_Logo_Color.svg.png";
import imgREACT from "/public/React-icon.svg.png";
import imgTS from "/public/Typescript_logo_2020.svg.png";
import imgGIT from "/public/Git-Icon-1788C.png";
import imgGITHUB from "/public/github-2.png";
import "./Skills.css";

export default function Skills() {
  const [isFlipped, setIsFlipped] = useState(false);
  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div onClick={flipCard} className="skills-front">
        <h1>SKILLS</h1>
      </div>
      <div onClick={flipCard} className="skills-back">
        <img src={imgHTML} />
        <img src={imgCSS} />
        <img src={imgSASS} />
        <img src={imgJS} />
        <img src={imgTS} />
        <img src={imgREACT} />
        <img src={imgGIT} />
        <img src={imgGITHUB} />
      </div>
    </ReactCardFlip>
  );
}

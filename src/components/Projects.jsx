import { useTranslation } from "react-i18next";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import "./Projects.css";
import guildThumbnail from "/public/thumbnail-guild-page.png";

export default function Projects() {
  const [isFlipped, setIsFlipped] = useState(false);
  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  const { t } = useTranslation();

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div onClick={flipCard} className="projects-front">
        <h1>PROJECTS</h1>
      </div>
      <div onClick={flipCard} className="projects-back">
        <div className="project">
          <a href="https://www.dirtyzukandtheboyz.com/" target="_blank">
            <img src={guildThumbnail}></img>
          </a>
          <h2>Guild page for my online gaming friends.</h2>
        </div>
      </div>
    </ReactCardFlip>
  );
}

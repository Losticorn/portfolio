import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import "./About.css";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div onClick={flipCard} className="about-front">
        <h1>ABOUT ME</h1>
      </div>
      <div onClick={flipCard} className="about-back">
        <p>
          When I am not working, you will find me either playing video games or
          spending time with my dog. I am looking forward hearing from you!
        </p>
      </div>
    </ReactCardFlip>
  );
}

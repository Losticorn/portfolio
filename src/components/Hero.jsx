import "./Hero.css";
import myPicture from "../assets/my-picture.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>Hello, my name is Jaroslav</h2>
        <h1>I make websites</h1>
        <p>and I am having fun while doing so.</p>
      </div>
      <div className="hero-image">
        <img src={myPicture} />
      </div>
    </div>
  );
}

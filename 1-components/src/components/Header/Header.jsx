import reactImg from "../../assets/react-core-concepts.png"
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
    const randomWord = reactDescriptions[genRandomInt(3)];

    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomWord} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
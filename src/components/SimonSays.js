import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./styles/SimonSays.css";

const SimonSays = () => {
  const [pattern, setPattern] = useState([]);
  const [showNumber, setShowNumber] = useState(0);
  const choices = ["blueBtn", "redBtn", "greenBtn", "yellowBtn"];

  useEffect(() => {
    const patternIncrement = () => {
      let patternArray = [];
      for (let i = 0; i < 100; i++)
        patternArray.push(Math.floor(Math.random() * 4));
      console.log(patternArray);
      setPattern(patternArray);
    };
    patternIncrement();
  }, []);

  const handleClick = () => {
    console.log("clicked");
    setShowNumber((showNumber) => showNumber + 1);
  };

  useEffect(() => {
    console.log(showNumber);
    const lightTiles = () => {
      if (pattern.length) {
        for (let i = 0; i < showNumber; i++) {
          const tileChosen = pattern[i];
          const tile = document.querySelector(`#${choices[tileChosen]}`);
          console.log(tile);
          tile.classList.add("chosen");
          tile.onanimationend = () => {
            tile.classList.remove("chosen");
          };
        }
      }
    };
    lightTiles();
  }, [showNumber]);

  return (
    <div className="gameContainer">
      {/* <Nav /> */}
      <h1>Jeu Simon Says</h1>
      <div className="simonGameWrapper">
        <div className="colorBtn" id="blueBtn"></div>
        <div className="colorBtn" id="redBtn"></div>
        <div className="colorBtn" id="greenBtn"></div>
        <div className="colorBtn" id="yellowBtn"></div>
        <button onClick={handleClick}>Start</button>
      </div>
    </div>
  );
};

export default SimonSays;

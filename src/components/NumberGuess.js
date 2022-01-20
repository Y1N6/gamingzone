import Nav from "./Nav";
import { useEffect, useState } from "react";

import "./styles/NumberGuess.css";

const NumberGuess = () => {
  const [display, setDisplay] = useState("Choisi un numéro");
  const [userInput, setUserInput] = useState("");

  const handleClickNum = (num) => {
    setUserInput(userInput + num);
  };

  //***********************  Supprimer le dernier élément d'une string (supprimer le dernier chiffre)  *************************/
  const erase = () => {
    setUserInput(userInput.substring(0, userInput.length - 1));
  };

  return (
    <div className="gameContainer">
      {/* <Nav /> */}
      <div className="numberGuessWrapper">
        <button className="returnBtn" onClick={erase}>
          Retour
        </button>
        <h1 className="numberGuessTitle">
          Trouve le bon nombre entre 1 et 1000
        </h1>
        <div id="inputField">{userInput ? userInput : display}</div>
        <div className="numberGuessOutput"></div>
        <ul className="digitWrapper">
          <div className="numberGuessContainer" id="digit1">
            <div
              className="numberGuessDigit"
              onClick={() => handleClickNum("1")}
            >
              1
            </div>
          </div>
          <div className="numberGuessContainer" id="digit2">
            <div className="numberGuessDigit" onClick={() => handleClickNum(2)}>
              2
            </div>
          </div>
          <div className="numberGuessContainer" id="digit3">
            <div className="numberGuessDigit" onClick={() => handleClickNum(3)}>
              3
            </div>
          </div>
          <div className="numberGuessContainer" id="digit4">
            <div className="numberGuessDigit" onClick={() => handleClickNum(4)}>
              4
            </div>
          </div>
          <div className="numberGuessContainer" id="digit5">
            <div className="numberGuessDigit" onClick={() => handleClickNum(5)}>
              5
            </div>
          </div>
          <div className="numberGuessContainer" id="digit6">
            <div className="numberGuessDigit" onClick={() => handleClickNum(6)}>
              6
            </div>
          </div>
          <div className="numberGuessContainer" id="digit7">
            <div className="numberGuessDigit" onClick={() => handleClickNum(7)}>
              7
            </div>
          </div>
          <div className="numberGuessContainer" id="digit8">
            <div className="numberGuessDigit" onClick={() => handleClickNum(8)}>
              8
            </div>
          </div>
          <div className="numberGuessContainer" id="digit9">
            <div className="numberGuessDigit" onClick={() => handleClickNum(9)}>
              9
            </div>
          </div>
          <div className="numberGuessContainer" id="digit0">
            <div className="numberGuessDigit" onClick={() => handleClickNum(0)}>
              0
            </div>
          </div>
          <div id="validateBtn">
            <button className="numberGuessValidate">Valider</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NumberGuess;

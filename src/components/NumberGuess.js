import Nav from "./Nav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles/NumberGuess.css";

const NumberGuess = () => {
  let navigate = useNavigate();
  const [display, setDisplay] = useState("Choisi un numéro");
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState(false);
  const [hint, setHint] = useState("");
  const [gameDone, setGameDone] = useState(false);
  const [randomNbr, setRandomNbr] = useState(
    Math.floor(Math.random() * 1000) + 1
  );

  console.log("random", randomNbr);

  const handleClickNum = (num) => {
    if (gameDone !== true) {
      if (userInput.length < 1 && num == 0) {
        return;
      } else {
        setUserInput(userInput + num);
      }
    }
  };

  //***********************  Supprimer le dernier élément d'une string (supprimer le dernier chiffre)  *************************/
  const erase = () => {
    setUserInput(userInput.substring(0, userInput.length - 1));
  };

  const handleClickValidate = () => {
    console.log("Validé!");
    setAnswer(+userInput);
    setHint(false);
  };

  useEffect(() => {
    console.log("setAnswer done", answer);

    if (!answer) {
      setDisplay("Choisi un numéro");
    } else if (answer < randomNbr) {
      setDisplay(`Ta réponse était: ${answer}`);
      setHint(`C'est plus !`);
    } else if (answer > randomNbr) {
      setDisplay(`Ta réponse était: ${answer}`);
      setHint(`C'est moins !`);
    } else if (answer === randomNbr) {
      setDisplay("Bravo !");
      setGameDone(true);
      setHint(false);
    }
    setUserInput("");
  }, [answer]);

  const restart = () => {
    setGameDone(false);
    setAnswer(false);
    setRandomNbr(Math.floor(Math.random() * 1000) + 1);
  };

  return (
    <div className="gameContainer">
      <Nav />
      <div className="returnBtnContainer">
        <button className="returnBtn" onClick={() => navigate("/gameList")}>
          Retour
        </button>
      </div>
      <div className="numberGuessWrapper">
        <h1 className="numberGuessTitle">
          Trouve le bon nombre
          <br />
          entre 1 et 1000
        </h1>
        <div className="restartArea">
          {hint && <div id="hintArea">{hint}</div>}
          {gameDone && (
            <button id="restartBtn" onClick={restart}>
              Rejouer
            </button>
          )}
        </div>
        <div id="outputField">{userInput ? userInput : display}</div>
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
          <div id="eraseContainer">
            <button className="eraseBtn" onClick={erase}>
              &#9166;
            </button>
          </div>
          <div id="validateBtn">
            <button
              className="numberGuessValidate"
              onClick={handleClickValidate}
            >
              Valider
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NumberGuess;

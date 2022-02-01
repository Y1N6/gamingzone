import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./styles/Morpion.css";
export default function Morpion() {
  const [isWin, setIsWin] = useState(false); // Quand TRUE, la partie se termine
  const [playerWin, setPlayerWin] = useState("")
  const [playerTurn, setPlayerTurn] = useState(true); // SI TRUE LE joueur 1 joue
  const [player1, setPlayer1] = useState([]); // Choix du joueur 1
  const [player2, setPlayer2] = useState([]); // Choix du joueur 2
  const [icon, setIcon] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]); //Icon de la cellule ()

  
  const success = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  useEffect(() => {
    console.log("2 : " + player1);
    console.log("1 : " + player2);
    success.forEach(el => {
        let count1 = 0;
        let count2 =0;
        player1.forEach(pl => {
            if (el.includes(pl)){
                count1++
                if (count1 === 3){
                    console.log("c'est gagné par joueur 1")
                    setIsWin(true)
                    setPlayerWin("1")
                }
            }})
        player2.forEach(pl => {
            if (el.includes(pl)){
                count2++
                if (count2 === 3){
                    console.log("c'est gagné par joueur 2")
                    setIsWin(true)
                    setPlayerWin("2")
                }
            }})
        
        })
      
  }, [player1, player2]);

  const addChoice = (numCell) => {
    const iconTemp = [...icon];
    if (!icon[numCell]){
        if (playerTurn) {
          const playTemp1 = [...player1];
          playTemp1.push(numCell);
          setPlayer1(playTemp1); //Ajout du choix dans un tableau
          setPlayerTurn(!playerTurn); // Changement de joueur
          iconTemp[numCell] = 1;
          setIcon(iconTemp);
        } else {
          const playTemp2 = [...player2];
          playTemp2.push(numCell);
          setPlayer2(playTemp2); //Ajout du choix dans un tableau
          setPlayerTurn(!playerTurn); // Changement de joueur
          iconTemp[numCell] = 2;
          setIcon(iconTemp);
        }
    }
  };


  const reset = () => {
    setPlayer1([]);
    setPlayer2([]);
    setIcon([0,0,0,0,0,0,0,0,0])
    setIsWin(false)
    setPlayerWin("")
  };

  return (
    <div className="gameContainer morpionContainer">
      <Nav />

      <h1>Jeux du Morpion</h1>
      <h3>Au tour de {playerTurn ? "X" : "O"}</h3>
      <div className="morpionGrid">
        <div onClick={() => addChoice(0)} className="morpionCell morpionCell0">
           {icon[0] === 0 ? null : icon[0] === 1 ? "X" : "O"} 
        </div>
        <div
          onClick={() => addChoice(1)}
          className="morpionCell morpionCell1"
        > {icon[1] === 0 ? null : icon[1] === 1 ? "X" : "O"} </div>
        <div
          onClick={() => addChoice(2)}
          className="morpionCell morpionCell2"
        > {icon[2] === 0 ? null : icon[2] === 1 ? "X" : "O"} </div>
        <div
          onClick={() => addChoice(3)}
          className="morpionCell morpionCell3"
        > {icon[3] === 0 ? null : icon[3] === 1 ? "X" : "O"} </div>
        <div
          onClick={() => addChoice(4)}
          className="morpionCell morpionCell4"
        > {icon[4] === 0 ? null : icon[4] === 1 ? "X" : "O"} </div>
        <div
          onClick={() => addChoice(5)}
          className="morpionCell morpionCell5"
        > {icon[5] === 0 ? null : icon[5] === 1 ? "X" : "O"} </div>
        <div
          onClick={() => addChoice(6)}
          className="morpionCell morpionCell6"
        > {icon[6] === 0 ? null : icon[6] === 1 ? "X" : "O"} </div>
        <div
          onClick={() => addChoice(7)}
          className="morpionCell morpionCell7"
        > {icon[7] === 0 ? null : icon[7] === 1 ? "X" : "O"} </div>
        <div
          onClick={() => addChoice(8)}
          className="morpionCell morpionCell8"
        > {icon[8] === 0 ? null : icon[8] === 1 ? "X" : "O"} </div>
      </div>
      <button className="reset" onClick={reset}>
        RESET EN SKRED
      </button>
      {isWin && <div className="win"><p>Bien joué {playerWin} C'est gagné maggle</p>
      </div>}
    </div>
  );
}

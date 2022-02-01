import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

import "./styles/ChooseGame.css";

const ChooseGame = () => {
  let navigate = useNavigate();

  return (
    <div id="IdOk">
      <Nav />
      <div className="ChooseGame">
        <div>Prêt {localStorage.getItem("name")} ?</div>
        <div>Choisis un jeu</div>
      </div>
      <div className="gamingList">
        <div className="gamingList1">
          <div className="game1" onClick={() => navigate("/numberGuess")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg"
              alt="gameOne"
            ></img>
            <p>Devine le nombre!</p>
          </div>
          <div className="game2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg"
              alt="gametwo"
            ></img>
            <p>Morpion</p>
          </div>
          <div className="game3" onClick={() => navigate("/pfc")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg"
              alt="gamethree"
            ></img>
            <p>Pierre Feuille Ciseaux</p>
          </div>
          <div className="game4" onClick={() => navigate("/simonSays")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg"
              alt="gamefour"
            ></img>
            <p>Simon</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseGame;

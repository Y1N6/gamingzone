import Nav from "./Nav";

import "./styles/ChooseGame.css"

const ChooseGame = () => {



  return (
    <div id="IdOk">
      <Nav />
      <div className="ChooseGame">
        <div>Prêt {localStorage.getItem('name')} ?</div>
        <div>Choisis un jeu</div>
      </div>
      <div className="gamingList">
        <div className="gamingList1">
          <div className="game1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg" alt="gameOne"></img>
            <p>Morpion</p>
          </div>
          <div className="game2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg" alt="gametwo"></img>
            <p>Morpion</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChooseGame
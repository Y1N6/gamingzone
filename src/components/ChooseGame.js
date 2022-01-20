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
    </div>
  )
}
export default ChooseGame
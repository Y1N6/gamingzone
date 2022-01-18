import Nav from "./Nav";
import Load from "./Load"

import "./styles/ChooseGame.css"

const ChooseGame = () => {



  return (
    <div id="IdOk">
      <Load />
      <Nav />
      <div className="ChooseGame">
        <div>Prêt {localStorage.getItem('name')} ?</div>
        <div>Choisis un jeu</div>
      </div>
    </div>
  )
}
export default ChooseGame
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

import "./styles/ChooseGame.css"

const ChooseGame = () => {
  let navigate = useNavigate()
  

//   let deleteLocalStorage = () => {
//     window.localStorage.clear();
//     navigate(`/identification`)
// }

  return (
    <div id="IdOk">
      <Nav />
      <div className="ChooseGame">
        <div>Prêt {localStorage.getItem('name')} ?</div>
        <div>Choisis un jeu</div>
        {/* <button onClick={deleteLocalStorage}>Delete Pseudo</button> */}
      </div>
    </div>
  )
}
export default ChooseGame
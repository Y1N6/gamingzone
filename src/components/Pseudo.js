import { useNavigate } from "react-router-dom"

import "./styles/Pseudo.css"

const Pseudo = () => {
  const navigate = useNavigate()
  
  let addlocalstorage = (e) => {
    e.preventDefault()
    const pseudo = document.getElementById("inputName")
    window.localStorage.setItem('name', pseudo.value);
    navigate(`/gameList`)
    }


  return (
    <form id="Pseudo" onSubmit={addlocalstorage}>
      <div>Bienvenue !</div>
      <label for='inputName'>Inscris ton pseudo :</label>
      <input required id='inputName' type="text" minLength="2" maxLength="15" placeholder="Pikachu"></input>
      <button type='submit' >Valider</button>
      
    </form>
  )
}
export default Pseudo
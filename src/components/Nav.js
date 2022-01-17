import { useState, useEffect } from "react/cjs/react.development"
import { NavLink } from "react-router-dom"
import "./styles/Nav.css"

const Nav = () => {
  
  let [active, setActive] = useState(false)

  let deleteLocalStorage = () => {
    window.localStorage.clear();
}
  return (
    <div id="nav">
      <div className="navBar" onClick={() => setActive(!active)}>Menu</div>
      <div className="logo">Logo</div>
      <div className={`navBarHidden ${active ? "navBarNotHidden" : ""}`}>
        <div className="navBarButton">
          <NavLink className="navLink" to="/gameList">Jeux</NavLink>
          <NavLink className="navLink" to="/">Score</NavLink>
          <NavLink className="navLink" to="/">Crédits</NavLink>
          <NavLink className="navLink" to="/identification" onClick={deleteLocalStorage}>Se déconnecter</NavLink>
        </div>
      </div>
    </div>
  )
}
export default Nav
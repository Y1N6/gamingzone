

import "./styles/ChooseGame.css"

const ChooseGame = () => {
  

  let Deletelocalstorage = () => {
    window.localStorage.clear();
}

  return (
    <div id="ChooseGame">
      <div>ChooseGame Gaming Zone</div>
      <div>Tu es bien identifié</div>
      <button onClick={Deletelocalstorage}>Delete Pseudo</button>
    </div>
  )
}
export default ChooseGame
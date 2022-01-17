import "./styles/Pseudo.css"

const Pseudo = () => {
  
  let Addlocalstorage = () => {
        window.localStorage.setItem('name', 'Obaseki Nosa');
    }

    let Deletelocalstorage = () => {
        window.localStorage.clear();
    }

    let Valuelocalstorage = () => {
        let Pseudo = window.localStorage.getItem('name');
        console.log(Pseudo)
    }

  return (
    <div id="Pseudo">
      <div>Pseudo a renseigner ici</div>
      <button onClick={Addlocalstorage}>Add</button>
      <button onClick={Deletelocalstorage}>Delete</button>
      <div className="Pseudo">Coucou</div>
      <button onClick={Valuelocalstorage}>Value</button>
    </div>
  )
}
export default Pseudo
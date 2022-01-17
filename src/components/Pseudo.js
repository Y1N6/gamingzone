import "./styles/Pseudo.css"

const Pseudo = () => {
  
  let Addlocalstorage = () => {
        window.localStorage.setItem('name', 'Obaseki Nosa');
    }


  return (
    <div id="Pseudo">
      <div>Pseudo a renseigner ici</div>
      <button onClick={Addlocalstorage}>Add Pseudo</button>
      
    </div>
  )
}
export default Pseudo
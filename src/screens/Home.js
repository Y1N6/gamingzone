import "./styles/Home.css"

import ChooseGame from '../components/ChooseGame'
import Pseudo from '../components/Pseudo'

const Home = () => {

  return (
  <div>
    {localStorage.getItem('name') ? <ChooseGame /> : <Pseudo />}
  </div>)
}
export default Home
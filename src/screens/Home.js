import "./styles/Home.css"

import { useState, useEffect } from "react"

import Nav from '../components/Nav'
import ChooseGame from '../components/ChooseGame'
import Pseudo from '../components/Pseudo'

const Home = () => {
  
  
  return (
    <div id="Home">
      <Nav />
      {localStorage.getItem('name') ? <ChooseGame /> : <Pseudo />}
    </div>
  )
}
export default Home
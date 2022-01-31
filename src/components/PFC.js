import "./styles/PFC.css"

import Nav from "./Nav"

import { useEffect, useState } from "react"

const PFC = () => {

    const [choice, setChoice] = useState("")
    const [autoChoice, setAutoChoice] = useState("")


    const newAutoChoice = () => {
        const choice = ["Pierre", "Feuille", "Ciseaux"]
        const random = choice[Math.floor((Math.random()*3))]
        setAutoChoice(random)
    }

    const Pierre = () => {
        setChoice("Pierre")
        newAutoChoice()
    }

    const Feuille = () => {
        setChoice("Feuille")
        newAutoChoice()
    }

    const Ciseaux = () => {
        setChoice("Ciseaux")
        newAutoChoice()
    }

  



    return (
        <div className="gameContainer">
            <Nav />
            <div className="PCF">
                <div className="PCFscore">

                </div>
                <div className="PCFChoose">
                    <div className="PCFPierre" onClick={Pierre}>
                        Pierre
                    </div>
                    <div className="PCFFeuille" onClick={Feuille}>
                        Feuille
                    </div>
                    <div className="PCFCiseaux" onClick={Ciseaux}>
                        Ciseaux
                    </div>
                </div>
                <div className="PCFResultats">
                    <div>Votre Choix : {choice}</div>
                    <div>Choix du Pc : {autoChoice}</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default PFC
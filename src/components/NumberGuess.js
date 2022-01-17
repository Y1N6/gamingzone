import Nav from "./Nav"

import "./styles/NumberGuess.css"

const NumberGuess = () => {
    return (
        <div className='gameContainer'>
            {/* <Nav /> */}
            <div className='numberGuessWrapper'>
                <button className='returnBtn'>Retour</button>
                <h1 className='numberGuessTitle'>Trouve le bon nombre entre 1 et 1000</h1>
                <div className='numberGuessOutput'></div>
                <ul className='digitWrapper'>
                    <div className='numberGuessContainer' id='digit1'><div className="numberGuessDigit" >1</div></div>
                    <div className='numberGuessContainer' id='digit2'><div className="numberGuessDigit" >2</div></div>
                    <div className='numberGuessContainer' id='digit3'><div className="numberGuessDigit" >3</div></div>
                    <div className='numberGuessContainer' id='digit4'><div className="numberGuessDigit" >4</div></div>
                    <div className='numberGuessContainer' id='digit5'><div className="numberGuessDigit" >5</div></div>
                    <div className='numberGuessContainer' id='digit6'><div className="numberGuessDigit" >6</div></div>
                    <div className='numberGuessContainer' id='digit7'><div className="numberGuessDigit" >7</div></div>
                    <div className='numberGuessContainer' id='digit8'><div className="numberGuessDigit" >8</div></div>
                    <div className='numberGuessContainer' id='digit9'><div className="numberGuessDigit" >9</div></div>
                    <div className='numberGuessContainer' id='digit0'><div className="numberGuessDigit" >0</div></div>
                </ul>
                <button className='numberGuessValidate'>Valider</button>
            </div>
        </div>
    )
}

export default NumberGuess

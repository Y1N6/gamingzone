import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import ChooseGame from "./components/ChooseGame";
import Pseudo from "./components/Pseudo";
import NumberGuess from "./components/NumberGuess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identification" element={<Pseudo />} />
        <Route path="/gameList" element={<ChooseGame />} />
        <Route path="/numberGuess" element={<NumberGuess />} />
      </Routes>
    </div>
  );
}

export default App;

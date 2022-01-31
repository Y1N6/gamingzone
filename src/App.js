import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import ChooseGame from "./components/ChooseGame";
import Pseudo from "./components/Pseudo";
import NumberGuess from "./components/NumberGuess";
import PFC from "./components/PFC";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identification" element={<Pseudo />} />
        <Route path="/gameList" element={<ChooseGame />} />
        <Route path="/numberGuess" element={<NumberGuess />} />
        <Route path="/pfc" element={<PFC />} />
      </Routes>
    </div>
  );
}

export default App;

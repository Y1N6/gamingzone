import './App.css';

import { Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import ChooseGame from './components/ChooseGame';
import Pseudo from './components/Pseudo';

function App() {
  return (
    <div className="App">    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gameList" element={<ChooseGame />} />
        <Route path="/identification" element={<Pseudo />} />
      </Routes>
    </div>
  );
}

export default App;

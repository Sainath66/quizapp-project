import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import GK from './pages/GK';
import './App.css';
import Puzzle from './pages/Puzzle';
import Technical from './pages/Technical';
import History from './pages/History';

function App() {
    return (
    <div>
      
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/GK' element={<GK/>}></Route>
        <Route path='/Puzzle' element={<Puzzle/>}></Route>
        <Route path='/Technical' element={<Technical/>}></Route>
        <Route path='/History' element={<History/>}></Route>
     </Routes>
    </div>
    );
  }
  export default App;
  
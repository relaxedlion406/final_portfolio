import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Development from "./components/Development";
import Iterative from './components/Iterative';
import ResponsiveRe from './components/ResponsiveRedesign';
import WeensyOS from './components/WeensyOS';




function App() {
  return (
    <Router>
      <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Projects/Development" element={<Development/>}/>
        <Route path="/Projects/Iterative" element={<Iterative/>}/>
        <Route path="/Projects/ResponsiveRedesign" element={<ResponsiveRe/>}/>
        <Route path="/Projects/WeensyOS" element={<WeensyOS/>}/>
      </Routes>
      </div>
    </Router> 
  );
}

export default App;

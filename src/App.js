import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Development from "./components/Development";



function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/development" element={<Development/>}/>
      </Routes>
      </div>
    </Router> 
  );
}

export default App;

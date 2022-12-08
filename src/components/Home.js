import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Projects/>   
      <AboutMe/>
    </div>
  );
}

export default Home;
/************ Cite from youtuber: webdecoded https://www.youtube.com/@webdecoded ************/
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./Banner";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { NavBar } from "./NavBar";

function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects/>   
      <AboutMe/>
    </div>
  );
}

export default Home;
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./Banner";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";

function Home() {
  return (
    <div className="App">
      <Banner/>
      <Projects/>   
      <AboutMe/>
    </div>
  );
}

export default Home;
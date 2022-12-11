import mePhoto from "../assets/img/me.png";

/************ Cite from youtuber: webdecoded https://www.youtube.com/@webdecoded ************/

export const AboutMe = () => {
  return (
    <section className="skill" id="AboutMe">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>"Who are you?"</h2>
                        <p>Great question! Let's divide this problem into several subproblems..
                        </p>
                        
                        <div className="question">
                            <div className="image">
                            <img src={mePhoto}></img>
                            </div>
                            <p><span className="color">1. Q: What is your current role?</span> <br></br>
                            A: I am a student from Brown University🐻. </p>
                            <p ><span className="color">2. Q: What do you plan to do in the future?</span>  <br></br>
                            A: I'm planning to develop a web application which has something to do with Harry Potter🧙 and the Universe🌍. </p>
                            <p ><span className="color">3. Q: What skills do you have?</span>   <br></br>
                            A: Python, Java, C/C++, C, JavaScript, HTML/CSS...💻
                            </p>
                            <p> <span className="color">4.Q: What do you like to do in your free time?</span>   <br></br>
                            A: Photography📹, Dancing💃, Jogging🏃 and meditation🧘...
                            </p>
                            
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>   
    </section>
  )
}

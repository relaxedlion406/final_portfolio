import React from "react";
import { Container } from "react-bootstrap";
import lofi from './lofi.pdf';
import {NavBarProject} from './NavBarProject';

const Iterative = () => {
    return (
        <div className="development">
            <NavBarProject/>
            <Container className="development_part development_color">
                <h1>Iterative Design: Popsy</h1>
                <p>Time Duration: November 2022 <br></br>
                    Programming Language: HTML/CSS <br></br>
                    Team Size: 4</p> 
                <br></br>
                <p>
                In this project, we worked in a group to design an interactive interface for an emerging startup named <span className="bold_style">Popsy</span>. 
                <br></br> <br></br>
                Popsy is an online website builder that works like Notion. It doesn’t require any coding background and allows users to make professional websites as easy as writing a document. 
               
                </p>
                <br></br>
                <div className="box">
                    <a href="https://popsy.co/">Popsy's Website</a>
                    <iframe src="https://popsy.co/" allowtransparency="false" title="Popsy" width="1100" height="400" ></iframe>
                </div>
                <br></br>
                <h2>Introduction</h2>
                <p> What is Iterative Design? 
                    <br></br>
                    <br></br>
                 <p style={{fontStyle: 'italic'}}>Iterative design is a design methodology based on a cyclic process of prototyping, testing, analyzing, and refining a product or process.</p>
                  
                   This process is intended to utimately imporve the quality and functionality of a design. In this project, we went through the full process of mocking up a solution to the startup's concept, which is split into four parts: 
                    <div className="list">
                        <li>
                            Sketching Ideas of The Interface
                        </li>
                        <li>
                            Creating an interactive, high-fidelity prototype
                        </li>
                        <li>
                            Conducting user testing on a final and Revised prototype
                        </li>
                        <li>
                            Contacting the start up
                        </li>
                    </div>
                    <br></br>
                </p>
                <h2>Interface Design
                </h2>
                <p>The concept of Popsy is making professional websites as easy as writing a document. Based on the concept, we establish the wireframes and high-fi prototype for our design. </p>
                <div className="design">
                    <iframe id="fred" title="PDF in an i-Frame" src={lofi} frameborder="1" scrolling="auto" height="450" width="950" ></iframe>
                    <iframe width="950" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxEWN2djVtCXSfXS5UJFvK8%2FIterative-Design%3Fnode-id%3D14%253A1870%26starting-point-node-id%3D14%253A1870%26scaling%3Dscale-down" allowfullscreen></iframe>
                </div>
                <div>
                    <br></br>
                    <h2>User Testing</h2>
                    <p>We conduct 3 user-testing test with User A, User B and User C with bellow tasks. </p>
                    <div>
                        <li>
                            Try the demo of the website
                        </li>
                        <li>
                            View the template library
                        </li>
                        <li>
                            Create your own website without a template
                        </li>
                        <li>
                            Log out of your account
                        </li>
                    </div>
                    <br></br>
                    <p>Analusis of Results</p>
                    <li>User A completed the task without any error. But we found an interesting point. Every time he performed a new task, he would go back to the home page first. This may be his own usage habit. </li>
                    <li>User B completed the task without any error. But she was confused by the task of trying the website demo. She didn’t know if she had completed this task.</li>
                    <li>User C thought the prototype should be fully-functional. Therefore, for the task of trying the website demo, she didn't know where the demo ended. For the task of viewing the template library, she expected that she could scroll down the page or enter a keyword to search for the intended template. For the task of creating the website, she thought she could truly add elements for the customized website. However, the prototype only displays key functions, which are not truly implemented.</li>
                    <br></br>
                    <p>Conclusion</p>
                    <li>Due to the limitation of the pages, it’s impossible to make the website fully interactional. We can add more interactions in the future if possible.</li>
                    <li>We can provide more instructions to guide the new users.</li>
                    <li>We used identical icons in the website editing page, which might cause some confusion. Therefore, we changed the icons to be unique and self-descriptive.</li>
                </div>
                <br></br>
                
               
            </Container>
        </div>
    )
}

export default Iterative;
import React from "react";
import { Container, Row } from "react-bootstrap";
import {NavBarProject} from './NavBarProject';
import original from '../assets/img/original_page.png';
import lofi from '../assets/img/lo-fi.png';
import ipad from '../assets/img/ipad.png';
import iphone from '../assets/img/iphone.png';
import desigGuide from '../assets/img/designGuide.png';

const ResponsiveRe = () => {
    return (
        <div className="development">
             <NavBarProject/>
            <Container className="development_part">
                <h1>Responsive Redesign</h1>
                <p> Time Duration: October, 2022<br></br>
                    Programming Language: HTML/CSS <br></br>
                    Team Size: 1</p> 

                <p>
                    The goal of the project is to find some usability problems in a website and redesign it. 
                </p>
                
                <div className="original">
                    <Row>
                    <img src = {original}></img>
                    <iframe width="500" height="400"src={'https://relaxedlion406.github.io/Assign2/'}></iframe>
                    </Row>
                    <p><a href="https://www.showcasecinemas.com/movies">The original website</a>(left) and the <a href="https://relaxedlion406.github.io/csci1300_development/">redesign website</a>(right).</p>
                </div>
                <br></br>
                <h2>Identify Problems</h2>
                <p>After analysing the usability of the web page with the criteria, including efficiency, learnability and memorability, there is a list of problems I found in the website.   <br></br>
                   <div>
                    <li>The information about the image in the header is not clear. </li>
                    <li>The search bar is easily neglected by users.</li>
                    <li>  Non-obvious Log-in access.</li>
                    <li>No information about every movie except the poster.</li>   
                   </div>
                </p>
                <h2>Visual Redesign</h2>
                <p>To address the problems I found, I created 3 wireframes of the different screen sizes (mobile, tablet, desktop).</p>
                <div className="original">
                <p>The Low-fidelity Wireframing </p> 
                <Row>
                    <img src={lofi}/>
                    <img src={ipad}/>
                    <div>
                        <img src={iphone}/>
                    </div> 
                </Row>
                </div>
                <br></br>
                <div className="original">
                    <p>Virtual Design Style Guide</p>
                    <img src={desigGuide}/>
                </div>
                <br></br>
                <div className="original">
                    <p>High-Fidelity Prototyping</p>
                    <iframe  width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHnzYxBYRCikv5F3WpvhcLA%2FUntitled%3Fscaling%3Dscale-down-width%26page-id%3D0%253A1%26node-id%3D10%253A269" allowfullscreen></iframe>
                </div>
                
                <div className="box">
                </div>
                <br></br>
                <h2>Conclusion</h2>
                <p>After the analysing and designing, I redesigned <a href="https://relaxedlion406.github.io/csci1300_development/">a simple website</a>. In this project, I learned the workflow of redesign a product, from analuzing and identifying flaws then creating prototypes, finally building a new product!  </p>
                
            </Container>
        </div>
    )
}

export default ResponsiveRe;
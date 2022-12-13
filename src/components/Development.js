import React from "react";
import { Container } from "react-bootstrap";
import {NavBarProject} from './NavBarProject';

const Development = () => {
    return (
        <div className="development">
             <NavBarProject/>
            <Container className="development_part">
                <div>
                <h1>Pick Cards</h1>
                 <p>Project Duration: November 2022<br></br>
                    Programming Language: Javascript(React) <br></br>
                    Team Size: 1</p> 
                <br></br>
                <p>
                    This is a project to develop my first interactive interface with interface components. <br></br>
                    It is an interface for users to select items out of a list, which then aggregates them. 
                </p>
                <br></br>
                <div className="box">
                    <a href="https://relaxedlion406.github.io/csci1300_development/">Website</a>
                    <iframe src="https://relaxedlion406.github.io/csci1300_development/" allowtransparency="false" title="Development" width="1100" height="400"></iframe>
                </div>
                <br></br>
                <h2>Context</h2>
                <p>This is an opportunity to develop interactive interfaces, use interface components, and bind components to internal data states.
We need to have at least 2 filtering categories and 1 sorting function and an aggregator section. Based on these conditions, as a big Harry Potter fan, I decided to make a Harry Potter themed card picker. Based on these conditions, and as a big Harry Potter fan, I decided to make a Harry Potter themed card picker.
                </p>
                <h2>Research</h2>
                <p>Based on the concept, I created a Figma file to show the initial design. </p>
                <div className="box">
                <iframe width="1100" height="400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmAAmwI4hVwLzNB6bObxicE%2FUntitled%3Fscaling%3Dscale-down%26page-id%3D0%253A1%26node-id%3D1%253A5"></iframe>
                </div>
               
                
                <h2>Conclusion</h2>
                <p>From this project, I firstly create an interactive interface with React. I'm getting familiar with React's components and other properties. </p>
                </div>
            </Container>
        </div>
    )
}

export default Development;

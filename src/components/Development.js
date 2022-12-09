import React from "react";
import { Container } from "react-bootstrap";

const Development = () => {
    return (
        <div className="development">
            <Container>
                <h1>Development</h1>
                <p>
                    This is a project to develop my first interactive interface with interface components. <br></br>
                    An interface for users to select items out of a list, which then aggregates them. 
                </p>
                <div className="box">
                    <a href="https://relaxedlion406.github.io/csci1300_development/">Website</a>
                    <iframe src="https://relaxedlion406.github.io/csci1300_development/" allowtransparency="false" title="Development" width="1100" height="400"></iframe>
                </div>
                <h2>Context</h2>
                <p>Basically, It is a simple interactive interface.  </p>
                <h2>Research</h2>
                <h2>Design Iterations</h2>
                <h2>Conclusion</h2>
            </Container>
        </div>
    )
}

export default Development;
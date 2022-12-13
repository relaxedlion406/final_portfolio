import React from "react";
import { Container, Row } from "react-bootstrap";
import {NavBarProject} from './NavBarProject';
import weensyos from '../assets/img/weensy.gif';


const WeensyOS= () => {
    return (
        <div className="development">
             <NavBarProject/>
            <Container className="development_part">
                <div>
                <h1>WeensyOS</h1>
                <div>    
                <p>Project Duration: March 2022 - April 2022 <br></br>
                    Programming Language: C++ <br></br>
                    Team Size: 1</p> 
                </div>
                <br></br>
                <p>
                   In this project, I implemented process memory isolation, virtual memory, and some system calls in a tiny operating system, called WeensyOS.
                </p>
                <br></br>
                <div className="weensyos">
                    <img src={weensyos}></img>
                    <p>Figure 1 four processes running a program in parallel</p>
                </div>
                <br></br>
                <h2>Introduction</h2>
                <br></br>
                <p>
                    Operating systems are an important part of our computing landscape, and how they work impacts how other computer systems – including the applications you write, and the distributed systems that technology companies run – work.
                    <br></br> <br></br>Virtual memory is a component of the operating system(OS) that helps the OS safely run multiple applications atop the same physical memory. Almost all modern operating systems use virtual memory.<br></br><br></br>
                In this project, I wrote OS kernel code that implements the virtual memory architecture and a few important system calls for a small operating system called WeensyOS. 
                
                </p>
                <br></br>
                <h2>Project Roadmap</h2>
                <br></br>
                <p>The WeensyOS supports 3MB of virtual memory on top of 2MB of physical memory. To implement full vortual memory with complete and correct memory isolation, I interacted with page tables, kernel and user memory spaces, rocesses, and virtual and physical memories. <br></br><br></br>Firstly, I implemented complete and correct memory isolation for WeensyOS processes. After that, I implemented full virtual memory, which will improve memory utilization. Lastly, I implemented the fork system call — creating new processes at runtime — and the exitsystem call — destroying processes at runtime. 
                </p>
                <br></br>
                <h2>Conclusion</h2>
                <br></br>
                <p>In this project, I have a high-level overview of virtual memory, and get to know the “memory iterators”.  I understand the user vs. kernel privilege split, and the design and implementation of virtual memory and the process creation and clearup. Also, I have a own timy operating system, WeensyOS.</p>
                </div>
            </Container>
        </div>
    )
}

export default WeensyOS;

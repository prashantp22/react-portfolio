import React from "react";
import Image from '../About/prashant.jpg'

function About() {
    return (
        <section id="About Me" className="aboutme">
            <h2 className="section-title">About</h2>
            <div>
                <img className="img-about" src= {Image} alt="prashant patel" />
            </div>
            <div>
                <p>
                    I am a Front-End Web Developer passionate about creating interactive appications and experiences on the web. I have complete a certifcate in Full Stack Web Development from the Rutgers University so I can bring ideas to life. I am seeking opportunities to learn and refine my development skills so that I can build better applications. As a strong communicator who can adapt to any team environment, I am excited to bring my experiences to join a quality-driven team to build great porducts.
                </p>
            </div>
        </section>
    );
}

export default About;
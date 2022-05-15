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
                    A Front-End Web Developer passionate about creating interactive appications and experiences on the web.
                </p>
            </div>
        </section>
    );
}

export default About;
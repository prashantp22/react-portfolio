import React from "react";

function Footer (){
    return (
        <footer>
        <h2>Made by Prashant Patel</h2>
        <p>
            &copy; 2022 Prashant, Inc.
        </p>
        <div>
            <p>732-822-5230</p>
            <a href="https://github.com/prashantp22">
                <img src= {require(`../Footer/GitHub-Mark-Light-64px.png`)} alt="github icon" />
            </a>

            <a href="https://www.linkedin.com/in/prashant-patel-0678b050/">
            <img src= {require(`../Footer/LI.png`)} alt="LinkedIn icon" />
            </a>

            <a href="https://twitter.com/prashantp622">
            <img src= {require(`../Footer/Twitter.png`)} alt="Twitter icon" />
            </a>
        </div>
    </footer>
    )
}

export default Footer;
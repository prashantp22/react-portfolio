import React from "react";

function Nav(){
    return (
      <header>
          <h2>
            <a href="/">
                Prashant
            </a>
          </h2>
            <nav>
                <ul>
                    <li>
                        <a href= "#About">About</a>
                    </li>
                    <li>
                        <a href="#Work">Work</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li>
                        <a href="Resume">Resume</a>
                    </li>
                </ul>
            </nav> 
      </header>
    );
}

export default Nav;
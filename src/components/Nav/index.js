import React from "react";
import { Link } from "react-scroll";

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
                        <Link smooth={ true } to="About Me" offset={-100} href= "#">About</Link>
                    </li>
                    <li>
                        <Link smooth={true} to="Work" offset={-100} href="#">Portfolio</Link>
                    </li>
                    <li>
                        <Link smooth={true} to="Contact" offset={-100} href="#">Contact</Link>
                    </li>
                    <li>
                        <Link smooth={true} to="Resume" offset={-100} href="#">Resume</Link>
                    </li>
                </ul>
            </nav> 
      </header>
    );
}

export default Nav;
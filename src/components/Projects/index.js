import React from 'react';

const Projects = () => {
    return(
        <div class="works">
        <a href="https://prashantp22.github.io/potterquiz/">
            <article class="work">
                <img src= {require(`../Projects/potter.jpg`)} alt="website clip" />
                <div class="workname">
                    <h3>Potter Quiz</h3>
                    <h4>HTML/CSS?JavaScript</h4>
                    <a href="https://github.com/prashantp22/potterquiz">
                        <img src= {require(`../Footer/GitHub-Mark-Light-64px.png`)} alt="github icon" />
                    </a>
                </div>
            </article>
        </a>

        <a href="https://github.com/Xcamaj/Dealership-inventory">
            <article class="work">
                <img src={require(`../Projects/dealership.png`)} alt="website clip" />
                <div class="workname">
                    <h3>Dealership Inventory</h3>
                    <h4>Node</h4>
                    <a href="https://github.com/Xcamaj/Dealership-inventory">
                        <img src= {require(`../Footer/GitHub-Mark-Light-64px.png`)} alt="github icon" />
                    </a>
                </div>
            </article>
        </a>

        <a href="https://adunny.github.io/concert-vagabond/">
            <article class="work">
                <img src={require(`../Projects/concert-vagabond.jpg`)} alt="wedsite clip" />
                <div class="workname">
                    <h3>Concert Vagabond</h3>
                    <h4>HTML/JavaScript/CSS/jQuery/Materialize</h4>
                    <a href="https://github.com/adunny/concert-vagabond">
                        <img src= {require(`../Footer/GitHub-Mark-Light-64px.png`)} alt="github icon" />
                    </a>
                </div>
            </article>
        </a>

        <a href="https://prashantp22.github.io/weather-dashboard/">
            <article class="work">
                <img src={require(`../Projects/weather.jpg`)} alt="website clip" />
                <div class="workname">
                    <h3>Weather Dashboard</h3>
                    <h4>JavaScript</h4>
                    <a href="https://github.com/prashantp22/weather-dashboard">
                        <img src= {require(`../Footer/GitHub-Mark-Light-64px.png`)} alt="github icon" />
                    </a>
                </div>
            </article>
        </a>

        <a href="https://prashantp22.github.io/run-buddy/">
            <article class="work">
                <img src={require(`../Projects/runbuddy.jpg`)} alt="website clip" />
                <div class="workname">
                    <h3>Run Buddy</h3>
                    <h4>HTML/CSS</h4>
                    <a href="https://github.com/prashantp22/run-buddy">
                        <img src= {require(`../Footer/GitHub-Mark-Light-64px.png`)} alt="github icon" />
                    </a>
                </div>
            </article>
        </a>

        <a href="https://prashantp22.github.io/password-generator/">
            <article class="work">
                <img src={require(`../Projects/password.jpg`)} alt="website clip" />
                <div class="workname">
                    <h3>Password Generator</h3>
                    <h4>HTML/CSS/javascript</h4>
                    <a href="https://github.com/prashantp22/password-generator">
                        <img src= {require(`../Footer/GitHub-Mark-Light-64px.png`)} alt="github icon" />
                    </a>
                </div>
            </article>
        </a>
    </div>
    );
 
}

export default Projects;
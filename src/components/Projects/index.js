import React from 'react';

const Projects = () => {
    return(
        <div class="works">
        <a href="https://prashantp22.github.io/potterquiz/">
            <article class="work">
                <img src= {require(`../Projects/potter.jpg`)} alt="" />
                <div class="workname">
                    <h3>Potter Quiz</h3>
                    <h4>HTML/CSS?JavaScript</h4>
                </div>
            </article>
        </a>

        <a>
            <article class="work">
                <img src={require(`../Projects/dealership.png`)} alt="" />
                <div class="workname">
                    <h3>Dealership Inventory</h3>
                    <h4>Node</h4>
                </div>
            </article>
        </a>

        <a href="https://adunny.github.io/concert-vagabond/">
            <article class="work">
                <img src={require(`../Projects/concert-vagabond.jpg`)} alt="" />
                <div class="workname">
                    <h3>Concert Vagabond</h3>
                    <h4>HTML/JavaScript/CSS/jQuery/Materialize</h4>
                </div>
            </article>
        </a>

        <a href="https://prashantp22.github.io/weather-dashboard/">
            <article class="work">
                <img src={require(`../Projects/weather.jpg`)} alt="" />
                <div class="workname">
                    <h3>Weather Dashboard</h3>
                    <h4>JavaScript</h4>
                </div>
            </article>
        </a>

        <a href="https://prashantp22.github.io/run-buddy/">
            <article class="work">
                <img src={require(`../Projects/runbuddy.jpg`)} alt="" />
                <div class="workname">
                    <h3>Run Buddy</h3>
                    <h4>HTML/CSS</h4>
                </div>
            </article>
        </a>

        <a href="https://prashantp22.github.io/password-generator/">
            <article class="work">
                <img src={require(`../Projects/password.jpg`)} alt="" />
                <div class="workname">
                    <h3>Password Generator</h3>
                    <h4>HTML/CSS/javascript</h4>
                </div>
            </article>
        </a>
    </div>
    );
 
}

export default Projects;
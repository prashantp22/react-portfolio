import React from "react";
import resume from "../../assets/resume/resume.pdf";

function Resume() {
    return(
        <section className="resume">
            <div>
                <h1>My Resume</h1>
                <p>Please click link below and download my resume</p>
                <button>
                    <a href={resume}>
                      resume
                    </a>
                </button>
            </div>
        </section>

    )
}

export default Resume
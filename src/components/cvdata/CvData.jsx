import "./CvData.css"
import cvJson from '../../assets/cv.json'

function CvData() {
    return(
        <div className="cv_container">
            <h1>My CV</h1>

            <section className="cv_section">
                <h2>Education</h2>
                {cvJson.education.map((education, index) => (
                    <div key={index} className="cv_item">
                        <h3>{education.school}</h3>
                        <p>{education.course}</p>
                        <p>{education.period}</p>
                    </div>
                ))}             
            </section>

            <section className="cv_section">
                <h2>Projects</h2>
                {cvJson.projects.map((project, index) => (
                    <div key={index} className="cv_item">
                        <h3>{project.projectName}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </section>

            <section className="cv_section">
                <h2>Work Experience</h2>
                {cvJson.workExperience.map((work, index) => (
                    <div key={index} className="cv_item">
                        <h3>{work.company} - {work.role}</h3>
                        <p>{work.description}</p>
                        <p>{work.period}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CvData;
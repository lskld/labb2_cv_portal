import "./CvData.css"
import cvJson from '../../assets/cv.json'

function CvData() {
    const fullName = cvJson.personalInfo.firstName + " " + cvJson.personalInfo.lastName;
    const contactEmail = cvJson.personalInfo.email;

    return(
        <div className="cv_container">
            <h1>Fullstack <span className="dotnet">.NET</span> Developer</h1>

            <section className="cv_personal_info">
                <p>{fullName} - {contactEmail}</p>  
            </section>

            <section className="cv_section">
                <h2>Education</h2>
                {cvJson.education.map((education, index) => (
                    <div key={index} className="cv_item">
                        <h3>{education.school}</h3>
                        <p>{education.course} | {education.period}</p>
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
                        <p>{work.period}</p>
                        <p>{work.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CvData;
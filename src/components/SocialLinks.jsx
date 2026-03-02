import githubIcon from "../assets/images/github-icon.png"
import linkedinIcon from "../assets/images/linkedin-icon.png"


function SocialLinks() {
    return (
        <div className="socialSection">

            <div>
                <h3>Connect</h3>
            </div>
            
            <div className="socialIcons">
                <div>
                    <a href="https://github.com/lskld" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="github logo icon" />
                    </a>
                </div>
                
                <div>
                    <a href="https://www.linkedin.com/in/theolillieskold/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="linkedin logo icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;
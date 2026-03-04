import "./AboutMe.css"
import fishImage from "../../assets/images/about_fishes.jpg"
import carbonshiftImage from "../../assets/images/carbonshift.png"

function AboutMe() {
    return (
        <div className="about_container">
            <h1>Who Am I?</h1>
            <section className="about_section">
                <div className="about_content">
                    <div>
                        <img className="about_image" src={carbonshiftImage} alt="A picture of Theo on the scene at Grafana AI Hackathon."/>
                    </div>

                    <div className="about_text">
                        <p>I’m a curious fullstack developer in training, focused on C# and .NET, building APIs, backend systems, and databases to sharpen 
                            both my technical skills and problem-solving mindset. I share projects on GitHub as a living journal of learning, experimentation, 
                            and steady improvement. I enjoy collaborating, joining hackathons, and turning ideas into practical, scalable solutions. My goal 
                            is to grow into a reliable, creative developer who delivers real value. I’m driven by curiosity, humor, and the belief that great 
                            software should be thoughtful, maintainable, and a little bit fun to build every single day, while learning, sharing, iterating, 
                            improving, reflecting, evolving. </p>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_text">
                        <p>I really enjoy sport fishing in Sweden and spend a lot of my free time on the water whenever I can. Fishing for pike, perch, and 
                            rainbow trout is a simple way for me to relax, focus, and enjoy being outdoors. I like trying different lures, learning how fish 
                            behave, and slowly improving my technique. Some days are quiet, others are exciting, but that’s part of the fun. Fishing gives me 
                            a break from screens and routines, and I appreciate the calm, the challenge, and the satisfaction of a good catch, no matter the size.</p>
                    </div>

                    <div>
                        <img className="about_image" src={fishImage} alt="Three pictures of Theo holding different fishes."/>
                    </div>
                </div>
            </section>
        </div>
        
    );
}

export default AboutMe;
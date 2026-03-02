import './Hero.css'
import heroImage from '../../assets/images/self_portrait.JPG'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className="heroSection">
            <div className="heroText">
                <h2>Hello, I'm Theo</h2>
                <p>I'm a Fullstack .NET student based in Stockholm, Sweden, currently studying at 
                Chas Academy with the goal of starting an exciting career as a developer. I'm 
                curious about how things work, and even more about how to make them better.</p>
                <Link to="/projects">
                <button>See my projects</button>
                </Link>
                
            </div>

            <img className="heroImage" src={heroImage} alt="picture of me" />
        </section>
    );
}

export default Hero;
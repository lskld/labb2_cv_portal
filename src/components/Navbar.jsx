import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cv" className={({ isActive }) => isActive ? "active" : ""}>
                        CV
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
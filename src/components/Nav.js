import { NavLink } from "react-router-dom";
import NavLine from "./NavLine";
export default function Nav() {
    return (
        <main>
            <aside className="socialNav">
                <a href="https://www.linkedin.com/in/valentinas-markulis-04250621b/"><img className="lnLogo" src="img/linked_in_logo.png"  alt="Linked-In-Logo"></img></a>
                <a href="https://github.com/Snubis6"><img className="gitLogo" src="img/Git_logo.png" href="www.google.com" alt="Github-Logo"></img></a>
            </aside>
            <nav>
            
                <NavLink to='/' end>Welcome</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/about'>About Me</NavLink>
                <NavLine/>
            
            </nav>
        </main>
    )
}
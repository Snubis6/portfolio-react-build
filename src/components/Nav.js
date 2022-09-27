import { NavLink } from "react-router-dom";
import NavLine from "./NavLine";
export default function Nav() {
    return (
        <main>
            
            <aside className="socialNav">
                <div className="socialNavCV">
                    <a href="http://test.valentinasmarkulis.com/wp-content/uploads/2022/09/Valentinas_Markulis_CV.pdf" rel="noreferrer" target="_blank"><img src="img/CVimg.webp" alt="my_cv_link"/></a>
                </div>
                <a href="https://www.linkedin.com/in/valentinas-markulis-04250621b/" rel="noreferrer" target="_blank"><img className="lnLogo" src="img/linked_in_logo.png"  alt="Linked-In-Logo"></img></a>
                <a href="https://github.com/Snubis6" rel="noreferrer" target="_blank"><img className="gitLogo" src="img/Git_logo.png" alt="Github-Logo"></img></a>
            </aside>
            <nav>
            
                <NavLink to='/' end>Welcome</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/about'>About Me</NavLink>
                <NavLine/>
            
            </nav>
            <aside className="contactMeBox">
                <a href="mailto:valentinasmarkulis@gmail.com"><img className="contactBtn" src="img/ContactMe.webp" alt="Contact-me"></img></a>
            </aside>
        </main>
    )
}
export default function AboutPage() {
    return (
        <main className="aboutMeBox">
            <h1 className="aboutTitle">A little about me</h1>
            <section className="aboutMe">
                <p>
                    I am a Multimedia Design student at Erhvervsakademi Aarhus with Front End Development specialization. I am passionate about programming, electronics DIY and acquiring new knowledge. I am a fast learner, steady and responsible. I always focus on the set task fully and complete it with best of my abilities.
                </p>
            </section>
            <h2 className="hardskills">Skill set</h2>
            <article className="skills">
            
                <section className="uX">
                    <h3>UX/UI</h3>
                    <ul>
                        <li>Prototyping</li>
                        <li>Wireframing</li>
                        <li>User flows</li>
                        <li>Mockups</li>
                        <li>User research</li>
                        <li>Usability testing</li>
                    </ul>
                </section>

                <section className="programming">
                    <h3>Programming</h3>
                    <ul>                        
                        <li>Objective Programming</li>
                        <ul>
                            <li>C++</li>
                            <li>C#</li>
                        </ul>
                        <li>Web Development</li>
                        <ul>
                            <li>JavaScript</li>                            
                            <li>React.js </li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <li>Databases</li>
                        <ul>
                            <li>MySQL</li>
                        </ul>
                    </ul>
                </section>

                <section className="design">
                    <h3>Design</h3>
                    <ul>
                        <li>Design Principles</li>
                        <li>Website Design</li>
                        <li>Adobe Creative Suite</li>
                        <li>Typography</li>
                        <ul><li>Font selection</li></ul>
                        <li>Photography</li>
                        <ul><li>Photo editing</li></ul>
                    </ul>
                </section>

            </article>
            <article className="softSkills">
            
                <section className="uX">
                    <ul>
                        <li>Flexibility</li>                        
                        <li>Communication</li>
                    </ul>
                </section>

                <section className="programming">
                    <ul>                        
                        <li>Time management</li>
                        <li>Reliability</li>
                        <li>Adaptability</li>
                        <li>Desire to learn</li>
                    </ul>
                </section>

                <section className="design">
                    <ul>
                        <li>Collaboration</li>
                        <li>Presentation</li>
                        <li>Ideation</li>
                        <li>Creativity</li>
                    </ul>
                </section>

            </article>
        </main>
    );
}

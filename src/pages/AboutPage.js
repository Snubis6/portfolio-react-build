
export default function AboutPage() {
    return (
        <main>
            <article className="aboutHeader">
            <h1 className="aboutTitle">A little about me</h1>
            <section className="aboutMe">
                <p>
                    I am a Multimedia Design student at Erhvervsakademi Aarhus with Front End Development specialization. I am passionate about programming, electronics DIY and acquiring new knowledge. I am a fast learner, steady and responsible. I always focus on the set task fully and complete it with best of my abilities.
                </p>
            </section>
            </article>
            <article className="progArticle">
                <div className="progArticleLeft">
                    <h2>Programming</h2>
                    <section className="skillDesc">
                        <ul className="skillDesc">                        
                            <li className="markColorLegend1"><span className="colorLegend1">Web Development</span></li>
                            <ul className="subsetItems">
                                <li>JavaScript</li>                            
                                <li>React.js </li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <li className="markColorLegend2"><span className="colorLegend2">Objective Programming</span></li>
                            <ul className="subsetItems">
                                <li>C++</li>
                                <li>C#</li>
                            </ul>
                            <li className="markColorLegend3"><span className="colorLegend3">Databases</span></li>
                            <ul className="subsetItems">
                                <li>MySQL</li>
                            </ul>
                        </ul>
                    </section>
                    <section className="skillRating">
                        <p>My overall progress</p>
                    </section>
                </div>
                <aside className="pieChart">
                    <img src="img/ProgPie.webp" alt="pieChart"></img>
                </aside>                
            </article>
            <article className="progArticle">
                <div className="progArticleLeft">
                    <h2>Design</h2>
                    <section className="skillDesc">
                        <ul className="skillDesc">                        
                            <li className="markColorLegend1"><span className="colorLegend1">Adobe creative suite</span></li>
                            <li className="markColorLegend2"><span className="colorLegend2">Typography</span></li>
                            <ul className="subsetItems">
                                <li>Font selection</li>
                            </ul>
                            <li className="markColorLegend3"><span className="colorLegend3">Photography</span></li>
                            <ul className="subsetItems">
                                <li>Photo editing</li>
                            </ul>
                            <li className="markColorLegend4"><span className="colorLegend4">Website design</span></li>
                            <li className="markColorLegend5"><span className="colorLegend5">Design principles</span></li>
                        </ul>
                    </section>
                    <section className="skillRating">
                        <p>My overall progress</p>
                    </section>
                </div>
                <aside className="pieChart">
                    <img src="img/DesignPie.webp" alt="pieChart"></img>
                </aside>                
            </article>
            <article className="progArticle">
                <div className="progArticleLeft">
                    <h2>UX/UI</h2>
                    <section className="skillDesc">
                        <ul className="skillDesc">                        
                            <li className="markColorLegend1"><span className="colorLegend1">Prototyping</span></li>
                            <li className="markColorLegend2"><span className="colorLegend2">Wireframing</span></li>
                            <li className="markColorLegend3"><span className="colorLegend3">User flows</span></li>
                            <li className="markColorLegend4"><span className="colorLegend4">Mockups</span></li>
                            <li className="markColorLegend5"><span className="colorLegend5">User research</span></li>
                            <li className="markColorLegend6"><span className="colorLegend6">Usability testing</span></li>
                            <li className="markColorLegend7"><span className="colorLegend7">Persona creation</span></li>
                        </ul>
                    </section>
                    <section className="skillRating">
                        <p>My overall progress</p>
                    </section>
                </div>
                <aside className="pieChart">
                    <img src="img/ProgPie.webp" alt="pieChart"></img>
                </aside>                
            </article>
        </main>    
    );
}

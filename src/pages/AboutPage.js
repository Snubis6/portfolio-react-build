import DownArrow from "../components/ArrowDown";
import ProgressBar from "../components/ProgressBar";



export default function AboutPage() {

    return (
        <main>
            <article className="aboutHeader">
            <h1 className="aboutTitle">A little about me</h1>
            <section className="aboutMe">
                <p>
                I am a Multimedia Design student at Erhvervsakademi Aarhus with Front End Development specialization. I am enthusiastic about programming, electronics DIY and acquiring new knowledge. I am adaptive, steady and responsible. I always focus on the set task fully and complete it with best of my abilities.
                </p>
            </section>
            <section className="aboutMeIntro">
                <p>You just have read my elevator pitch, since that is out of the way, let me reintroduce myself. Hello, I am Ventinas Markulis, humorous and quirky person currently trying to delve deeper into front-end development. Over the last year of my multimedia design studies I had to make quite a few projects. None of them were anything extraordinary but nevertheless thanks to the work I have put into them I gained experience on how to correctly apply my theoretical knowledge, to produce something worthwhile. Most of the projects were made in groups so communication and flexibility were particularly important, same as time management and reliability. When working in a team, every member is responsible for the success or failure of the project. </p>
                <div className="cvSection">
                    <p>If you are interested to know more about my experience you can take a look at my CV:    </p>
                    <a href="http://test.valentinasmarkulis.com/wp-content/uploads/2022/09/Valentinas_Markulis_CV.pdf" rel="noreferrer" target="_blank"><img src="img/CVimg.webp" alt="my_cv_link"/></a>
                </div>
            </section>
            <section className="aboutMeSkills">
                <p>Here you can find my current skillset description. I am constantly learning and bettering my knowledge in related fields, so statistics are prone to change. </p>
                
            </section>
            <DownArrow/>
            </article>
            <article className="progArticle">
                <div className="progArticleLeft">
                    <h2>Programming</h2>
                    <section className="skillDesc">
                        <ul className="skillDesc">                        
                            <li className="markColorLegend1"><span>Web Development</span></li>
                            <ul className="subsetItems">
                                <li>JavaScript</li>                            
                                <li>React.js </li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <li className="markColorLegend2"><span>Objective Programming</span></li>
                            <ul className="subsetItems">
                                <li>C++</li>
                                <li>C#</li>
                            </ul>
                            <li className="markColorLegend3"><span>Databases</span></li>
                            <ul className="subsetItems">
                                <li>MySQL</li>
                            </ul>
                        </ul>
                    </section>
                    <section className="skillRating">
                        <p>My level of confidence:</p>
                        <ProgressBar key={0} bgcolor={"black"} completed={68}/>
                    </section>
                </div>
                <aside className="pieChart">
                    <img src="img/ProgPie.webp" alt="pieChart"></img>
                </aside>
            </article>
            <article className="progArticle">
                <div className="progArticleLeft">
                    <h2>UX/UI</h2>
                    <section className="skillDesc">
                        <ul className="skillDesc">                        
                            <li className="markColorLegend1"><span>User research</span></li>
                            <li className="markColorLegend2"><span>Usability testing</span></li>
                            <li className="markColorLegend3"><span>Mockups</span></li>
                            <li className="markColorLegend4"><span>Wireframing</span></li>
                            <li className="markColorLegend5"><span>User flows</span></li>
                            <li className="markColorLegend6"><span>Prototyping</span></li>
                            <li className="markColorLegend7"><span>Persona creation</span></li>
                        </ul>
                    </section>
                    <section className="skillRating">
                        <p>My level of confidence:</p>
                        <ProgressBar key={0} bgcolor={"black"} completed={59}/>
                    </section>
                </div>
                <aside className="pieChart">
                    <img src="img/UxuiPie.webp" alt="pieChart"></img>
                </aside>                
            </article>
            <article className="progArticle">
                <div className="progArticleLeft">
                    <h2>Design</h2>
                    <section className="skillDesc">
                        <ul className="skillDesc">                        
                            <li className="markColorLegend1"><span>Website design</span></li>
                            <li className="markColorLegend2"><span>Typography</span></li>
                            <ul className="subsetItems">
                                <li>Font selection</li>
                            </ul>
                            <li className="markColorLegend3"><span>Photography</span></li>
                            <ul className="subsetItems">
                                <li>Photo editing</li>
                            </ul>
                            <li className="markColorLegend4"><span>Adobe creative suite</span></li>
                            <li className="markColorLegend5"><span>Design principles</span></li>
                        </ul>
                    </section>
                    <section className="skillRating">
                        <p>My level of confidence:</p>
                        <ProgressBar key={0} bgcolor={"black"} completed={50}/>
                    </section>
                </div>
                <aside className="pieChart">
                    <img src="img/DesignPie.webp" alt="pieChart"></img>
                </aside>                
            </article>
            
        </main>    
    );
}

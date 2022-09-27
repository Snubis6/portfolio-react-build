import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import parse from "html-react-parser";

export default function ProjectSelectPage() {
    const [project, setProject] = useState({});
    const params = useParams();
    const slug = params.slug;
    

    useEffect(() => {
        async function getData(){
            const url = `https://test.valentinasmarkulis.com/wp-json/wp/v2/projects?slug=${slug}&_embed&v=158`;
            const res = await fetch(url);
            const data = await res.json();
            setProject(data[0]);
        }
        getData();
    }, [slug]);

    

    return (
        <section className="page">
            <div className="projectBackBtn">
                <NavLink to='/projects'>{project.acf?.img4 && <img src={project.acf.img4.url} alt={project.acf?.img4.title} />}</NavLink>
            </div>
            <section className="post-row">
            <h1>{project.title && parse(project.title.rendered)}</h1>
                <section className="articleRow">
                    <article className="rowLeft">
                        <article className="rowLeftTextBox">
                            <h2>Project Summary</h2>
                            <p><b>Client:</b> {project.acf?.btitle}</p>
                            <div>
                                <p><b>My role:</b></p>
                                <p>{project.acf?.brole}</p>
                            </div>
                            <div><p><b>Duration:</b>{project.acf?.bduration}</p></div>
                            <div>
                                <p><b>Team Members:</b></p>
                                <p>{project.acf?.projecttype}</p>
                            </div>
                        </article>
                    </article>
                    <article className="rowRight">
                        {project.content && parse(project.content.rendered)}
                        <div className="usefulLinksBox">
                            <b>Useful links:</b>
                            <div className="usefulLinks">
                                <a href={project.acf?.img1label} rel="noreferrer" target="_blank">{project.acf?.img1 && <img src={project.acf.img1.url} alt={project.acf?.img1.title} />}</a>
                                <a href={project.acf?.img2label} rel="noreferrer" target="_blank">{project.acf?.img2 && <img src={project.acf.img2.url} alt={project.acf?.img2.title} />}</a>
                                <a href={project.acf?.img3label} rel="noreferrer" target="_blank">{project.acf?.img3 && <img src={project.acf.img3.url} alt={project.acf?.img3.title} />}</a>
                            </div>{/* {project.acf?.cvfile.url} */}
                        </div>
                    </article>
                    {/* {project.acf?.logo && <img src={project.acf.logo.url} alt={project.acf?.logo.title} />} */}
                </section>
            </section>
        </section>
    );
}

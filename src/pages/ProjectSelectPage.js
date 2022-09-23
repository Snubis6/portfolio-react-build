import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
            console.log(data);
        }
        getData();
    }, [slug]);

    

    return (
        <section className="page">
            <section className="post-row">
                <article>
                    <h1>{project.title && parse(project.title.rendered)}</h1>
                    <article>{project.content && parse(project.content.rendered)}</article>
                    {project.acf?.logo && <img src={project.acf.logo.url}/>}
                </article>
            </section>
        </section>
    );
}

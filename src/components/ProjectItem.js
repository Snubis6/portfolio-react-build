import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom'

export default function Projectitem({ project }) {
    const navigate = useNavigate();
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (project._embedded && project._embedded["wp:featuredmedia"]) {
        image = project._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article onClick={() => navigate(project.slug)}>
            <img src={image} alt={project.title.rendered} />
            <section className="projectIntroBox">
                <h1>{parse(project.title.rendered)}</h1>
                {parse(project.excerpt.rendered)}
            </section>
            {/* {project.acf?.webiste_url}
            {project.acf.logo && <img src={project.acf.logo.url}/>} */}
        </article>
    );
}
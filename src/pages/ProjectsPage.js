import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";




export default function ProjectPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getData(){
            const res = await fetch("https://test.valentinasmarkulis.com/wp-json/wp/v2/projects?_embed&v=158");
            const data = await res.json();
            setProjects(data);
        }
        getData()

    }, []);
    return (
        
            <main className="projectsPageText">
                <h1>Projects</h1>
                <section className="grid-container">
                    {projects.map(project =>  (
                        <ProjectItem key={project.id} project={project}/>))}            
                </section>
            </main>
    );
}

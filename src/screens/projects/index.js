import React from "react";
import GitHub from "../../components/gihub";
import '../../styles/projects.scss'
import '../../styles/home.scss'

const ProjectsScreen = () => {
    return (
        <div id="container">
            <div className="main">
                <h1 className="title" id="title">
                    Aqui estão listados todos os meus repositorios públicos do GitHub
                </h1>
            </div>
            <GitHub />
        </div>
    )
}

export default ProjectsScreen
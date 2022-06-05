import React, { useEffect, useState } from "react";
import { IoLogoGithub } from 'react-icons/io'
import api from "../../services/api";


const GitHub = () => {
    const [repos, setRepos] = useState([{ name: 'Carregando...', descripion: '...', html_url: '#' }])

    useEffect(() => {
        async function getGitAPI() {
            const response=await api.get("/users/mateus-gotardi/repos")
            setRepos(response.data)
        }
        getGitAPI()
    }, [])
    return (
        <div id="container">
            <div className="main"><h1 className="title" id="title">Aqui estão listados todos os meus repositorios públicos do GitHub</h1></div>
            {repos.map((i) => {
                return (
                    <div className="box" id='box3'>
                        <div className="column1">
                            <h1 className="title">{i.name}</h1>
                            <p className="info">{i.description}</p>
                        </div>
                        <div className="column2">
                            <a className="link" href={i.html_url} target='blank'><IoLogoGithub /></a>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default GitHub
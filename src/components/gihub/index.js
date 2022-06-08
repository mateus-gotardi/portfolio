import React, { useEffect, useState } from "react";
import api from "../../services/api";


const GitHub = () => {
    const [repos, setRepos] = useState([{ name: 'Carregando...', descripion: '...', html_url: '#' }])

    useEffect(() => {
        async function getGitAPI() {
            const response = await api.get("/users/mateus-gotardi/repos")
            setRepos(response.data)
        }
        getGitAPI()
    }, [])
    return (
            repos.map((i) => {
                return (
                    <a href={i.html_url} target='blank' className="box git-container">
                            <h1 className="title">{i.name}</h1>
                            <p className="description">{i.description}</p>
                    </a>
                )
            })
    )
}

export default GitHub
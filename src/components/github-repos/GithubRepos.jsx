import { useState, useEffect } from 'react';
import "./GithubRepos.css"

function GithubRepos() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const githubApi = 'https://api.github.com/users/lskld/repos';

    useEffect(() => {
        fetch(githubApi)
            .then(response => response.json())
            .then(data => {
                setRepos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Could not get github repos", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading Github projects...</p>
    }

    return(
        <div className='project_container'>
            <h1>My public Github projects:</h1>

            <div className='project_grid'>
                {repos.map(repo => (
                    <div key={repo.id} className='project_card'>
                        <h3>{repo.name}</h3>
                        <p>Language: {repo.language}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><button className='github_redicrect_button'>See on Github</button></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GithubRepos;
import { useEffect, useState } from 'react';
import '../css/Repositorios.css'

async function fetchRepos() {

  document.title = "Curriculo Virtual - Repositorios";

    const gotoRepo = (url: string, name_repo: string) => {
        if(window.confirm(`Você tem certeza que quer ir para o link do repositorio ${name_repo}?`)) {
            window.location.href = url;
        }

        else {
            return;
        }
    }
  const response = await fetch('https://api.github.com/users/Luan16p/repos');
  const repos = await response.json();
  const repoDivs = repos.map((repo: any) => {
    const language = repo.language || 'Other';
    let color = '';
    switch (language.toLowerCase()) {
        case 'javascript':
          color = '#f1e05a';
          break;
        case 'typescript':
          color = '#2b7489';
          break;
        case 'html':
          color = '#e34c26';
          break;
        case 'css':
          color = '#563d7c';
          break;
        case 'python':
          color = '#3572A5';
          break;
        case 'java':
          color = '#b07219';
          break;
        case 'c#':
          color = '#178600';
          break;
        case 'c++':
          color = '#f34b7d';
          break;
        case 'ruby':
          color = '#701516';
          break;
        case 'php':
          color = '#4F5D95';
          break;
        case 'swift':
          color = '#F05138';
          break;
        case 'kotlin':
          color = '#A97BFF';
          break;
        case 'scala':
          color = '#DC322F';
          break;
        case 'go':
          color = '#00ADD8';
          break;
        case 'dart':
          color = '#00B4AB';
          break;
        case 'rust':
          color = '#DEA584';
          break;
        case 'lua':
          color = '#000080';
          break;
        case 'shell':
          color = '#89E051';
          break;
        case 'powershell':
          color = '#012456';
          break;
        case 'elixir':
          color = '#6E4A7E';
          break;
        case 'clojure':
          color = '#DB5855';
          break;
        case 'haskell':
          color = '#5E5086';
          break;
        case 'r':
          color = '#198CE7';
          break;
        default:
          color = '#6e7681';
          break;
      }
    return (
      <div className="repositorio-single" title={`${repo.name}`} onClick={() => gotoRepo(repo.html_url, repo.name)} style={{background: '#222222'}}>
        <div className="info-repo">
          <h4 className="title-repositorio" style={{color: '#58A6FF', fontWeight: 'bold'}}>{repo.name}</h4>
          <span className='descricao text-light'>{repo.description}</span>
          <div className="linguagem">
            <div className="cor_linguagem" style={{background: color}}></div>
            <span className="nome_linguagem">{language}</span>
          </div>
        </div>
        <div className="icons-repo">
          <div className='icon-repo'/>
        </div>
      </div>
    );
  });
  return repoDivs;
}

export default function Repositorios(props: any) {
  const [repoDivs, setRepoDivs] = useState([]);

  useEffect(() => {
    fetchRepos().then((repos) => {
      setRepoDivs(repos);
    });
  }, []);

  return (
    <div>
      <main className="repositorios-route">
        <section className="repositorios-section">
          <div className="text-title-repo-div">

            <h3 style={{fontWeight: 'bold'}}>Algoritmos e Projetos</h3>

            <p>Confia alguns de meus projetos, repositorios e softwares que eu desenvolvi ou estudei!</p>

          </div>

          {repoDivs}
        </section>
      </main>
    </div>
  );
}
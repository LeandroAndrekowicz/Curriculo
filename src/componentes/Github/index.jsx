import { useState, useEffect } from 'react'
import { AiFillGithub, AiFillStar, AiOutlineArrowUp } from 'react-icons/ai'
import { VscRepo } from 'react-icons/vsc'
import { FiUsers } from 'react-icons/fi'

import './Github.css'

const USUARIO = 'LeandroAndrekowicz'
const TOP_LINGUAGENS = 5

function cima(event){
  event.preventDefault();
  window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
}

function calculaLinguagens(repos){
  const contagem = {}

  repos
    .filter((repo) => !repo.fork && repo.language)
    .forEach((repo) => {
      contagem[repo.language] = (contagem[repo.language] || 0) + 1
    })

  const total = Object.values(contagem).reduce((soma, valor) => soma + valor, 0)

  if(total === 0){
    return []
  }

  return Object.entries(contagem)
    .sort((a, b) => b[1] - a[1])
    .slice(0, TOP_LINGUAGENS)
    .map(([nome, quantidade]) => ({
      nome,
      percentual: Math.round((quantidade / total) * 100),
    }))
}

const Github = () => {
  const [perfil, setPerfil] = useState(null)
  const [linguagens, setLinguagens] = useState([])
  const [erro, setErro] = useState(false)
  const [mostraContribuicoes, setMostraContribuicoes] = useState(true)

  useEffect(() => {
    async function carrega(){
      try{
        const [resPerfil, resRepos] = await Promise.all([
          fetch(`https://api.github.com/users/${USUARIO}`),
          fetch(`https://api.github.com/users/${USUARIO}/repos?per_page=100`),
        ])

        if(!resPerfil.ok || !resRepos.ok){
          throw new Error('falha ao consultar a API do GitHub')
        }

        const dadosPerfil = await resPerfil.json()
        const repos = await resRepos.json()

        const estrelas = repos
          .filter((repo) => !repo.fork)
          .reduce((soma, repo) => soma + repo.stargazers_count, 0)

        setPerfil({
          repositorios: dadosPerfil.public_repos,
          seguidores: dadosPerfil.followers,
          estrelas,
        })
        setLinguagens(calculaLinguagens(repos))
      }
      catch{
        setErro(true)
      }
    }

    carrega()
  }, [])

  return (
    <div className='container-github'>
      <header className='container-titulo'>
        <h2><AiFillGithub /> GitHub</h2>
        <p className='subtitulo'>Estatísticas atualizadas direto do meu perfil</p>
      </header>

      {erro &&
        <p className='mensagem-erro'>Não foi possível carregar as estatísticas agora.</p>
      }

      {!erro && perfil &&
        <>
          <div className='grid-tiles'>
            <div className='tile'>
              <i><VscRepo /></i>
              <span className='valor'>{perfil.repositorios}</span>
              <span className='label'>Repositórios públicos</span>
            </div>
            <div className='tile'>
              <i><FiUsers /></i>
              <span className='valor'>{perfil.seguidores}</span>
              <span className='label'>Seguidores</span>
            </div>
            <div className='tile'>
              <i><AiFillStar /></i>
              <span className='valor'>{perfil.estrelas}</span>
              <span className='label'>Estrelas conquistadas</span>
            </div>
          </div>

          {linguagens.length > 0 &&
            <div className='container-linguagens'>
              <h5>Linguagens mais usadas</h5>
              {linguagens.map((linguagem) => (
                <div className='linguagem-linha' key={linguagem.nome}>
                  <span className='linguagem-nome'>{linguagem.nome}</span>
                  <div className='linguagem-trilha'>
                    <div className='linguagem-barra' style={{ width: `${linguagem.percentual}%` }}></div>
                  </div>
                  <span className='linguagem-percentual'>{linguagem.percentual}%</span>
                </div>
              ))}
            </div>
          }

          {mostraContribuicoes &&
            <div className='container-contribuicoes'>
              <h5>Contribuições no último ano</h5>
              <img
                src={`https://ghchart.rshah.org/ffb20a/${USUARIO}`}
                alt={`Gráfico de contribuições de ${USUARIO} no GitHub`}
                onError={() => setMostraContribuicoes(false)}
              />
            </div>
          }

          <a href={`https://github.com/${USUARIO}`} className='contato' target='_blank' rel='noreferrer'>Ver perfil completo</a>
        </>
      }

      <p className='seta'><AiOutlineArrowUp onClick={() => cima(event)}/></p>
    </div>
  )
}

export default Github

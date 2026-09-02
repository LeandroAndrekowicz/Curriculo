import './Habilidades.css'
import { SiReact, SiFlutter, SiDart, SiNestjs, SiNodedotjs, SiTypescript, SiJavascript, SiPostgresql, SiFigma, SiPython, SiDocker, SiGit } from 'react-icons/si'

const habilidades = [
  { nome: 'Flutter', icone: <SiFlutter /> },
  { nome: 'Dart', icone: <SiDart /> },
  { nome: 'React', icone: <SiReact /> },
  { nome: 'NestJS', icone: <SiNestjs /> },
  { nome: 'Node.js', icone: <SiNodedotjs /> },
  { nome: 'TypeScript', icone: <SiTypescript /> },
  { nome: 'JavaScript', icone: <SiJavascript /> },
  { nome: 'PostgreSQL', icone: <SiPostgresql /> },
  { nome: 'Figma', icone: <SiFigma /> },
  { nome: 'Python', icone: <SiPython /> },
  { nome: 'Docker', icone: <SiDocker /> },
  { nome: 'Git', icone: <SiGit /> },
]

const Habilidades = () => {
  return (
    <div className='container-habilidades'>
      <header className='container-titulo'>
        <h2>Habilidades</h2>
        <p className='subtitulo'>Atualmente focado em desenvolvimento mobile</p>
      </header>
      <div className='grid-habilidades'>
        {habilidades.map((habilidade) => (
          <div className='chip-habilidade' key={habilidade.nome}>
            <i>{habilidade.icone}</i>
            <span>{habilidade.nome}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Habilidades

import './Experiencia.css'

const experiencias = [
  {
    cargo: 'Desenvolvedor Backend Jr',
    empresa: 'Pormade Portas',
    periodo: '03/2024 – 08/2025',
    atividades: [
      'Desenvolvimento de APIs, integrações e regras de negócio com NestJS',
      'Desenvolvimento Front-End com ReactJS, focado em UX/UI',
      'Prototipação de telas e fluxos no Figma',
      'Modelagem e gestão de bancos de dados relacionais em PostgreSQL',
      'Automação de processos e tratamento de dados com Python',
      'Atuação Full Stack, do banco de dados à interface',
    ],
  },
  {
    cargo: 'Trainee',
    empresa: 'Pormade Portas',
    periodo: '04/2023 – 03/2024',
    atividades: [
      'Desenvolvimento de sistemas em Maker No-Code e APEX',
      'Criação de dashboards em Power BI',
      'Desenvolvimento de websites com ReactJS',
    ],
  },
  {
    cargo: 'Estagiário de TI',
    empresa: 'Prefeitura de União da Vitória',
    periodo: '2022',
    atividades: [
      'Manutenção preventiva e corretiva de equipamentos em escolas e CMEIs',
      'Montagem e organização de laboratórios de informática',
    ],
  },
]

const Experiencia = () => {
  return (
    <div className='container-experiencia'>
      <header className='container-titulo'>
        <h2>Experiência</h2>
      </header>
      <div className='timeline'>
        {experiencias.map((experiencia) => (
          <div className='item-timeline' key={`${experiencia.cargo}-${experiencia.periodo}`}>
            <div className='marcador'></div>
            <div className='conteudo-timeline'>
              <span className='periodo'>{experiencia.periodo}</span>
              <h5>{experiencia.cargo}</h5>
              <h6>{experiencia.empresa}</h6>
              <ul>
                {experiencia.atividades.map((atividade) => (
                  <li key={atividade}>{atividade}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className='formacao'>Graduação em Sistemas de Informação — UNESPAR <span>(em andamento)</span></p>
    </div>
  )
}

export default Experiencia

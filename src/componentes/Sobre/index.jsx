import './Sobre.css'

const Sobre = () => {
  return (
    <div className='container-sobre'>
        <div className='container-foto'>    
            <figure>
                <img src="https://github.com/LeandroAndrekowicz.png" alt="minha foto" />
            </figure>
            <div className='container-texto'>
                <h2>Sobre mim</h2>
                <h5>
                    Programador 
                    <span>
                        & Estudante
                    </span>
                </h5>
                <p>
                    Sou desenvolvedor com experiência Full Stack, unindo front-end em ReactJS, back-end em NestJS e modelagem de bancos PostgreSQL. Também tenho uma forte paixão por tecnologia e programação, além de um grande interesse em RPGs e música.
                </p>
                <p>
                    Atualmente estou focado em me especializar em desenvolvimento mobile com Flutter e Dart, enquanto curso Sistemas de Informação na UNESPAR. Estou sempre em busca de aprendizado e aberto a novos desafios para aprimorar minhas habilidades.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Sobre
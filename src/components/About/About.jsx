import React from 'react'
import { Link } from 'react-router-dom'
import './style/about.css'
import hab from '../../img/hab.jpg'
import pitcher from '../../img/Pitcher.jpg'


const About = () => {
    return (
        <>
            <div className="about">
                <h1 className="title">Acerca de mi</h1>
                <div className="me">
                <div className="card card0">
                        <div className="border"></div>
                    </div>
                    <h2>Soy una persona seria, responsable y con muchas ganas de trabajar y
                        de seguir aprendiendo, con alta disposición para cumplir metas, buena
                        actitud para el trabajo en equipo y facilidad para relacionarme en grupo.
                        Busco un puesto desafiante y dinámico para continuar sumando
                        experiencia y conocimientos.</h2>
                </div>
                <div className="me">
                    <h3>
                    Soy beisbolista profesional (Pitcher/Lanzador) desde el año 2011 en el cual me vinculè con el equipo
                    Orioles de Baltimore, con este juguè 6 años como profesional. He estado en representaciòn
                    con la selecciòn de mi paìs desde entonces y jugando beisbol profesional invernal
                    en el cual llevo 11 años de experiencia. Gracias a mi carrera deportiva he logrado
                    muchos triunfos al igual como el vincularme con mi actual universidad con beca deportista 
                    excelencia.
                    </h3>
                    <img className="pitcher" src={pitcher} alt="" />
                </div>
                <div className="separator">________________________________________________________________________________________________________________________________________________________________</div>
                <div className="hab">
                    <img className='hab' src={hab} alt="" />
                </div>
                <p className="description">Los años de experiencia como deportista profesional han desarrollado habilidades tales como:
                    <ul>
                        <br />
                        <li><i className="fa-solid fa-check"></i> Buena comunicación</li>
                        <li><i className="fa-solid fa-check"></i> Trabajo en equipo</li>
                        <li><i className="fa-solid fa-check"></i> Liderazgo</li>
                        <li><i className="fa-solid fa-check"></i> Motivación</li>
                        <li><i className="fa-solid fa-check"></i> Resolución de problemas</li>
                        <br />
                    </ul>
                    Deseo utilizar mis habilidades para ayudar a que empresas como ustdes alcancen sus objetivos</p>
                
            </div>
            <div className="arrow"><h1>Tecnologias</h1></div>
            <div className="arrow2">
                
                <i className='bx bxl-html5' ></i>
                <i class='bx bxl-css3' ></i>
                <i class='bx bxl-java bx-tada' ></i>
                <i class='bx bxl-javascript' ></i>
                <i class='bx bxl-react bx-spin' ></i>
            </div>
            <div className="arrow">
            <Link to='/'>
                <i className="fa-solid fa-circle-arrow-left"></i>
            </Link>
            <Link to="/proyectos" data-scroll-nav="1">
                    <i className="fa-solid fa-circle-arrow-right"></i>
            </Link>
            </div>
        </>
    )
}

export default About
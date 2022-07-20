import React, { useState } from 'react'
import './style/home.css'
import yo from '../../img/Yo.jpg'
import { Link } from 'react-router-dom'
const Home = () => {



    return (
        <>
            <div className="home">
                <div className="img"><img src={yo} alt="" /></div>
                <div className="info">
                    <div className="container">
                        <h2 className="titulo">
                            <span>Yo <i className="fa-regular fa-heart"></i> Programar <br /></span>
                            <span className="name">
                                Desarrollador Front-end
                            </span>
                        </h2>
                        <p>Soy estudiante de Tecnología en desarrollo de software y sistemas
                                de informacion de la
                                Fundacion Universitaria Colombo americano de la ciudad de cartagena,
                                a su vez estudiante en formacion de Analisis y desarrollo de sistemas de informacion en
                                el Servicio Nacional de Aprendizaje (SENA)
                                de Colombia <br/> Y estudiante en formacion de Academlo enfocado en el Desarrollo Web
                                Full stack y Ciencias de la computación
                        </p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/yeizer-marrugo-vel%C3%A1squez-4a584a165/" target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Yeizermarrugo" target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/yeizermarrugo/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=3002385126&text=Me%20interesa%20tu%20Cv..." target="_blank">
                        <i class="fa-brands fa-whatsapp bx-tada"></i>
                        </a>
                    </div>
                    <a href="https://drive.google.com/file/d/1XnRwXr5ouzXuZQF7Zmp8Pl3WxleD-L1K/view?usp=sharing" download="CV_YeizerMarrugo" target="_blank"><button>Descargar Cv</button></a>
                </div>
            </div>
            <div className="arrow">
                <Link to="/about" data-scroll-nav="1">
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </Link>
            </div>
        </>
    )
}

export default Home
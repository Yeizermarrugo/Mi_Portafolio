import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style/proyectos.css'
import poke from '../../img/poke.gif'
import poke2 from '../../img/poke2.png'
import rick from '../../img/rick.png'
import rick2 from '../../img/rick2.png'
import commerce from '../../img/comerce.png'
import commerce2 from '../../img/comerce2.png'
import shop from '../../img/shop.png'
import shop2 from '../../img/shop2.png'
import { Link } from 'react-router-dom'

const Proyectos = () => {

    return (
        <>
            <div className='products-container'>
                <article className='card-product'>
                    <header className='card-product__header'>
                        <img
                            className='card-product__img-back'
                            src={poke2}
                            alt=""
                        />
                        <img
                            className='card-product__img'
                            src={poke}
                            alt=""
                        />
                    </header>
                    <div className='card-product__body'>
                        <h2 className='card-product__title'>PokeApp</h2>
                        <div className='card-product__price-container'>
                            <h3 className='card-product__label'>En esta Pokédex podrás encontrar detalles y
                                estadísticas sobre tu Pokémon favorito.<br /><br />
                                <b>Tecnologia usadas en este proyecto:</b><br />
                                React.Js & Css
                            </h3>
                        </div>
                        <a className='card-product__btn' href='https://github.com/Yeizermarrugo/Pokeapp' target='_blank'>
                            <i className='bx bx-code-alt' ></i>
                        </a>
                        <a className='card-product__btn2' href='https://yeizermarrugo-pokeapp.netlify.app/' target='_blank'>
                            <i className='bx bxl-netlify' ></i>
                        </a>
                    </div>

                </article>

                <article className='card-product'>
                    <header className='card-product__header'>
                        <img
                            className='card-product__img-back'
                            src={rick2}
                            alt=""
                        />
                        <img
                            className='card-product__img'
                            src={rick}
                            alt=""
                        />
                    </header>
                    <div className='card-product__body'>
                        <h2 className='card-product__title'>Rick & Morty App</h2>
                        <div className='card-product__price-container'>
                            <h3 className='card-product__label'>En esta App podrás encontrar y conocer todos los
                                personajes de la serie Rick and Morty y conocer su
                                ubicación según la dimensión donde se encuentra su
                                planeta la cantidad de personajes viviendo en ella y
                                su estado (Vivo, muerto o desconocido).<br /><br />
                                <b>Tecnologia usadas en este proyecto:</b><br />
                                React.Js & Css
                            </h3>
                        </div>
                        <a className='card-product__btn' href='https://github.com/Yeizermarrugo/Rick-MortyApp' target='_blank'>
                            <i className='bx bx-code-alt' ></i>
                        </a>
                        <a className='card-product__btn2' href='https://rick-morty-yeizerapp.netlify.app/' target='_blank'>
                            <i className='bx bxl-netlify' ></i>
                        </a>
                    </div>

                </article>

                <article className='card-product'>
                    <header className='card-product__header'>
                        <img
                            className='card-product__img-back'
                            src={commerce2}
                            alt=""
                        />
                        <img
                            className='card-product__img'
                            src={commerce}
                            alt=""
                        />
                    </header>
                    <div className='card-product__body'>
                        <h2 className='card-product__title'>E-commerce</h2>
                        <div className='card-product__price-container'>
                            <h3 className='card-product__label'>Comercio electrónico que consiste en la compra y
                                venta de productos o de servicios a través de
                                internet, tales como redes sociales y otras páginas
                                web..<br /><br />
                                <b>Tecnologia usadas en este proyecto:</b><br />
                                React.Js & Css
                            </h3>
                        </div>
                        <a className='card-product__btn' href='https://github.com/Yeizermarrugo/e-commerce_react' target='_blank'>
                            <i className='bx bx-code-alt' ></i>
                        </a>
                        <a className='card-product__btn2' href='https://e-commerce-yeizermarrugo-react.netlify.app/' target='_blank'>
                            <i className='bx bxl-netlify' ></i>
                        </a>
                    </div>

                </article>


                <article className='card-product'>
                    <header className='card-product__header'>
                        <img
                            className='card-product__img-back'
                            src={shop2}
                            alt=""
                        />
                        <img
                            className='card-product__img'
                            src={shop}
                            alt=""
                        />
                    </header>
                    <div className='card-product__body'>
                        <h2 className='card-product__title'>E-commerce</h2>
                        <div className='card-product__price-container'>
                            <h3 className='card-product__label'>Comercio electrónico que consiste en la compra y
                                venta de productos o de servicios a través de
                                internet, tales como redes sociales y otras páginas
                                web..<br /><br />
                                <b>Tecnologia usadas en este proyecto:</b><br />
                                HTML, CSS & Javascript
                            </h3>
                        </div>
                        <a className='card-product__btn' href='https://github.com/Yeizermarrugo/Carrito_compras' target='_blank'>
                            <i className='bx bx-code-alt' ></i>
                        </a>
                        <a className='card-product__btn2' href='https://e-commerce-yeizermarrugo.netlify.app/' target='_blank'>
                            <i className='bx bxl-netlify' ></i>
                        </a>
                    </div>

                </article>
            </div>
            <div className="arrow">
            <Link to='/about'>
                <i className="fa-solid fa-circle-arrow-left"></i>
            </Link>
            <Link to="/contact" data-scroll-nav="1">
                    <i className="fa-solid fa-circle-arrow-right"></i>
            </Link>
            </div>

        </>
    )
}

export default Proyectos
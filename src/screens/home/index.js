import React from "react";
import '../../styles/home.scss'
import profilePic from '../../assets/images/profile.png'
import unicamp from '../../assets/images/logo-unicamp.png'
import onebit from '../../assets/images/onebitcode.jpg'
import { IoLogoWhatsapp, IoLogoGithub } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { TbMessageLanguage } from 'react-icons/tb'
import { SiAdobeaftereffects, SiAdobepremierepro, SiLinkedin } from 'react-icons/si'
import { DiJavascript1, DiHtml5, DiCss3Full, DiReact, DiMongodb, DiPhotoshop, DiSass } from 'react-icons/di'


const HomeScreen = () => {
    return (
        <div className="container">
            <div className="column">
                <div id='box1' className="box">
                    <div className="image-container">
                        <img alt="foto-pefil" className="img" src={profilePic}></img>
                    </div>
                    <div className="info-container">
                        <h1 className="title">MATEUS GOTARDI</h1>
                        <span className="tag">Javascript Full Stack Developer</span>
                        <a className="info" href='https://contate.me/mateusgotardi' target='blank'><IoLogoWhatsapp /> (11) 9 5309-0693</a>
                        <a className="info" href='mailto: mateus.gotardi@gmail.com'><MdEmail /> mateus.gotardi@gmail.com</a>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/mateus-de-aguiar-gotardi-774632195/" target='blank'><SiLinkedin /></a>
                            <a href="https://github.com/mateus-gotardi" target='blank'><IoLogoGithub /></a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="column">
                <div className="line">
                    <div id='box4' className="box">
                        <h2 className="sub-title">Sobre Mim</h2>
                        <section className="content">
                            <p className="info">
                                Atualmente cursando o nono semestre de Comunicação Social - Midialogia na Universidade Estadual de Campinas.
                            </p>
                            <p className="info">
                                Sou bom trabalhando em equipe e possuo experiência com captação e edição de produtos audiovisuais, ultimamente venho me esforçando na area de desenvolvimento web, especialmente front-end.
                            </p>
                            <p className="info">Procuro minha primeira oportunidade como desenvolvedor.</p>
                        </section>

                    </div>
                    <div id='box4' className="box">
                        <h2 className="sub-title">Habilidades</h2>
                        <p className="info">
                            <ul>
                                <li><DiJavascript1 />JavaScript</li>
                                <li><DiHtml5 />HTML</li>
                                <li><DiCss3Full />CSS</li>
                                <li><DiSass />Sass</li>
                                <li><DiReact />React-JS</li>
                                <li><DiMongodb />MongoDB</li>
                                <li><DiPhotoshop />Photoshop</li>
                                <li><SiAdobeaftereffects />After-Effects</li>
                                <li><SiAdobepremierepro />Premiere PRO</li>
                                <li><TbMessageLanguage /> Inglês Intermediário</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div id='box2' className="box">
                    <h2 className="sub-title">Formação</h2>
                    <div className="exp">
                        <img className="img-small" src={unicamp} alt='logo unicamp' />
                        <div>
                            <h2 id="sub-title">Comunicação Social - Midialogia</h2>
                            <p className="info">Universidade Estadual de Campinas</p>
                            <p className="info">2018 - atual</p>
                        </div>

                    </div>
                    <hr></hr>
                    <div className="exp">
                        <img className="img-small" src={onebit} alt='logo one bit code' />
                        <div>
                            <h2 id="sub-title">Programador Fullstack Javascript Profissional</h2>
                            <p className="info">
                                OneBitCode
                            </p>
                            <p className="info">
                                2022
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
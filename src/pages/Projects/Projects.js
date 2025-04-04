import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Shorter from "./short.png"
import Agendamento from "./agendamento.png"
import './Projects.css'
import { TfiArrowTopRight } from "react-icons/tfi";
import { VscCode } from "react-icons/vsc";


function Projects() {
    return(
        <div className="App">
            <Header/>

            <div className="init content padding">
                <div className="content padding">
                    <span className="h3 padding">Projects</span>
                    <div className="project padding-more">
                        <img alt="me" className='imgME scale'width='600' height='400' src={Shorter}></img>

                        <div className="project-desc">
                            <div style={{display:'flex', flexDirection: 'column',gap: '1rem'}}>
                                <div>
                                    <h1 className="h3">Shortly</h1>
                                    <h3 className="stat">
                                    <span className="status-text">Complete</span>
                                    <span className="status">
                                        <span className="status-ball"/>
                                        <span className="status-shadow"/>
                                    </span>
                                    </h3>
                                </div>
                                <p>Shorten your links, responsive website, this project provides a simple and scalable solution for converting long URLs into shorter, more manageable links, made with Javascript, HTML and Sass.</p>
                            </div>

                            <div className="project-buttons">
                                <button 
                                    className="btn-projects" 
                                    onClick={() => window.open("https://vercel.com/terukimateus-projects/shorter-url-duli", "_blank", "noopener,noreferrer")}
                                >
                                    Deploy
                                    <TfiArrowTopRight size={18}/>
                                </button>
                                <button 
                                    className="btn-projects" 
                                    onClick={() => window.open("https://github.com/terukimateus/shorter-url", "_blank", "noopener,noreferrer")}
                                >
                                    Code
                                    <VscCode size={22}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="project-2 padding-more">
                        <img alt="me" className='imgME scale'width='600' height='400' src={Agendamento}></img>

                        <div className="project-desc">
                            <div style={{display:'flex', flexDirection: 'column',gap: '1rem'}}>
                                <div>
                                    <h1 className="h3">Agendamento de Quadras</h1>
                                    <h3 className="stat">
                                    <span className="status-text">Complete</span>
                                    <span className="status">
                                        <span className="status-ball"/>
                                        <span className="status-shadow"/>
                                    </span>
                                    </h3>
                                </div>
                                <p>Rent your court, is a web application developed in Node.js, Express, MongoDB, Next.js and React.js. It enables scheduling and management of sports court reservations, featuring user authentication, booking creation, and integration with Mercado Pago for payments.                                                                                                                                                                                                                                                                                                                                      </p>
                            </div>

                            <div className="project-buttons">
                                <button 
                                    className="btn-projects" 
                                    onClick={() => window.open("https://agendamento-quadras-cliente.vercel.app/", "_blank", "noopener,noreferrer")}
                                >
                                    Deploy
                                    <TfiArrowTopRight size={18}/>
                                </button>
                                <button 
                                    className="btn-projects" 
                                    onClick={() => window.open("https://github.com/terukimateus/agendamento-quadra", "_blank", "noopener,noreferrer")}
                                >
                                    Code
                                    <VscCode size={22}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <Footer/>
        </div>
    )
}                                                                                   

export default Projects                         
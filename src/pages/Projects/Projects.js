import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Shorter from "./short.png"
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
                                <button className="btn1">
                                    <a rel="noreferrer" style={{color: 'black'}} href="https://shorter-url-ten.vercel.app/" target="_blank">
                                    Deploy<TfiArrowTopRight size={18}/>
                                    </a>
                                </button>
                                <button className="btn1">
                                    <a rel="noreferrer" style={{color: 'black'}}href="https://github.com/terukimateus/shorter-url" target="_blank">
                                    Code<VscCode size={18}/>
                                    </a>
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
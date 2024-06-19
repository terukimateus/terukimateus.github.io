import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImgMe from "./me.jpg"
import "./About.css"

function About() {
    return(
        <div className="App">
            <Header/>

            <div className='init content padding'>
                <div className="content padding">
                    <span className="h3">About me</span>
                    <div className="padding about">
                        <img width='400' height='400'className='imgME'decoding="async" alt="Me" src={ImgMe}/>

                        <div className="about-text">
                            <p>My name is <span className="hl">Mateus</span>, I'm 19</p>
                            <p>I'm a <span className="hl">fullstack developer</span>, with 2 years experience in HTML, CSS, ReactJS, Next.js, Python, Javascript, Sass, Git and more.</p>
                            <p>I started my development career at the end of 2022, with projects and studies on my own, I joined the IT course at <i className="hl">the State University of Maringá</i> in the second semester of 2023, currently in the third period.</p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default About
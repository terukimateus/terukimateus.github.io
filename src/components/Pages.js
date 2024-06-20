import React from "react"
import './styles/Pages.css'
import { FaRegUser, FaCode, FaMugHot, FaVoicemail } from "react-icons/fa6";

import imgAbout from './img/about.png'
import imgProject from './img/projects.jpg'
import imgExperiences from './img/experiences.jpg'
import imgContact from './img/contact.jpg'
 
function Pages() {

    return(
        <div className="flex">
            <a className="rounded" title='Projects' href='/#/about'>
            <div>
                <img className='pageImg' width='250' height='250' decoding='async' alt='About' src={imgAbout}/>
                <div className="absolute top">
                    <button style={{color: 'black'}} className="btn"><FaRegUser/></button>
                </div>
                <div className="absolute bottom">
                    <p>About me</p>
                </div>
            </div>
            </a>
            <a className="rounded" title='Projects' href='/#/projects'>
            <div>
                <img className='pageImg' width='250' height='250' decoding='async' alt='Projects' src={imgProject}/>
                <div className="absolute top">
                    <button className="btn"><FaCode/></button>
                </div>
                <div className="absolute bottom">
                    <p>Projects</p>
                </div>
            </div>
            </a>
            <a className="rounded" title='Projects' href='/#/experiences'>
            <div>
                <img className='pageImg' width='250' height='250' decoding='async' alt='Experiences' src={imgExperiences}/>
                <div className="absolute top">
                    <button className="btn"><FaMugHot/></button>
                </div>
                <div className="absolute bottom">
                    <p>Experiences</p>
                </div>
            </div>
            </a>
            <a className="rounded" title='Projects' href='/#/contact'>
            <div>
                <img className='pageImg' width='250' height='250' decoding='async' alt='Projects' src={imgContact}/>
                <div className="absolute top">
                    <button className="btn"><FaVoicemail/></button>
                </div>
                <div className="absolute bottom">
                    <p>Contact</p>
                </div>
            </div>
            </a>
        </div>
    )
}

export default Pages
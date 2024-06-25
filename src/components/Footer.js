import './styles/Footer.css'
import React from 'react';

import { FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

function Footer() {
    return (
        <footer className='content footer padding'>
            <div className='round'>
                <div className='itens'>
                    <div className='itens-grid'>
                        <button class='footerBtn'title='Instagram'>
                            <a className='a' rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/terukimateus'>
                                <FaInstagram color='white' size={20}/>
                            </a>
                        </button>
                        <button  class='footerBtn' title='Github'>
                            <a className='a'  rel="noopener noreferrer" target='_blank' href='https://github.com/terukimateus'>
                                <FaGithub color='white' size={20}/>
                            </a>
                        </button>
                        <button class='footerBtn' title='Linkedin'>
                            <a className='a' rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/terukimateus/'>
                                <FaLinkedinIn color='white' size={20}/>
                            </a>
                        </button>
                        <button class='footerBtn' title='Email'>
                            <a className='a'rel="noopener noreferrer" target='_blank' href='mailto:terukimateus@outlook.com'>
                                <FaEnvelope color='white' size={20}/>
                            </a>
                        </button>
                    </div>
                </div>
                <div className='shrinks'/>
                <div className='span'>
                    <span>@2024 Mateus Teruki</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
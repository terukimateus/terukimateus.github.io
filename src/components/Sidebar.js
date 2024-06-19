import React from 'react';
import { IconContext } from "react-icons";
import { TfiClose } from "react-icons/tfi"
import './styles/Header.css'; // Arquivo de estilos para a navegação lateral

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div>
            <a href='/' style={styles.logoTxt}>M</a>
        </div>
        <div className='line-sidebar'/>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="/about">About me</a></li>
            <div className='line-sidebarr'/>
            <li><a href="/projects">Projects</a></li>
            <div className='line-sidebarr'/>
            <li><a href="/experiences">Experiences</a></li>
            <div className='line-sidebarr'/>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <button style={styles.closeBTN} onClick={closeSidebar}>
                <IconContext.Provider style={styles.iconBTN} value={{color: 'white', size: 12}}>
                    <TfiClose/>
                </IconContext.Provider>
            </button>
      </div>
    );
  };

export default Sidebar;


const styles = {
    closeBTN: {
        position: 'absolute',
        right: 10,
        top: 20,
        backgroundColor: 'transparent',
        border: '0.1px solid white',
        borderRadius: 6,
    },
    iconBTN: {
        display: 'block',
        width: '100px',
        heigh: '10px',
    },
    logoTxt: {
        fontSize: 42,
        color: 'white',
        fontWeight: 700,
    },
}
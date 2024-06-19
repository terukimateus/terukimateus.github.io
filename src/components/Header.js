import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IconContext } from "react-icons";
import { TfiLayoutGrid3Alt } from "react-icons/tfi"
import Sidebar from './Sidebar';

function Header()  {

    const isMobile = useMediaQuery({ maxWidth: 1024 })

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const closeSideBar = () => {
        setIsOpen(false)
    }

    return (
        <div>
        <header style={styles.header}>
            {isMobile ? <Sidebar isOpen={isOpen} closeSidebar={closeSideBar}/> : false}
            <div className="header-content">
                {isMobile ? (
                    <div style={styles.contentPc}>
                        <button style={styles.navButton} onClick={toggleSidebar}>                   
                        <IconContext.Provider value={{ color: "white", size: 28}}>
                            <TfiLayoutGrid3Alt/>
                        </IconContext.Provider> 
                        </button>
                    
                        <a href='/'style={styles.logoTxt}>M</a>
                    </div>
                ) : (
                    <div style={styles.contentPc}>
                        <a href="/" style={styles.logo}>
                            <span style={styles.logoTxt}>M</span>
                            <span style={styles.headerTxt}>mateus teruki</span>
                        </a>
                        <ul style={styles.headerNav}>
                            <li><a href="/about" className="headerBTN">About me</a></li>
                            <li><a href ='/projects' className="headerBTN">Projects</a></li>
                            <li><a href ='/experiences' className="headerBTN">Experiences</a></li>
                            <li><a href='/contact' className="headerBTN">Contact</a></li>
                        </ul>
                    </div>
                )} 
            </div>
        </header>
        <div className='line'/>

        </div>
    )
}


const styles = {
    header: {
        backgroundColor: '#09090b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '65%',
    },
    contentPc: {
        width: '100%',
        height: '6em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        display: 'flex',
        alignItems: 'center'
    },
    logoTxt: {
        fontSize: 42,
        color: 'white',
        fontWeight: 700,
    },
    headerTxt: {
        fontSize: 24,
        color: 'white',
        fontWeight: 500,
        marginLeft: 15,
    },
    headerNav: {
        display: 'flex',
        width: '40%',
        justifyContent: 'space-evenly',
        listStyleType: 'none'
    },
    navButton: {
        backgroundColor: 'transparent',
        border: 'none'
    },
}
export default Header
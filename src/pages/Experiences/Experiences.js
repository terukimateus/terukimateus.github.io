import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './Experiences.css'


function Experiences() {
    return(
        <div className="App">
            <Header/>

            <div className="init content padding">
                <span className="h3">Experiences</span>
                <div className="content padding">
                    <div className="experience">
                        <span className="bold">Freelance</span>
                        <span className="grey">Developer FullStack</span>
                        <i className="grey">2022 Nov - currently</i>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Experiences
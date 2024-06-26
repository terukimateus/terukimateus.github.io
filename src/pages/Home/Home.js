import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import Pages from '../../components/Pages';
import Footer from '../../components/Footer';
import { TfiArrowTopRight } from "react-icons/tfi";

function Home() {
  return (
    <div className="App">
      <Header/>

      <div className='init content padding'>
        <div className='justify-column'>
          <h1 className="title">Hi, I’m Mateus Teruki</h1>
          <span className="h2">Fullstack developer</span>
        </div>
        <span className="desc">Software Developer FullStack, focused on Frontend. Some projects in React.js, React Native, Javascript, and others..</span>
        <button className='btn1'>
          <a style={{color: 'black'}} target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/terukimateus/'>
          Go to my Linkedin<TfiArrowTopRight/>
          </a>
        </button>
      </div>

      <div className='content pages padding'>
        <h1 className="h3">Browse</h1>
        <Pages />
      </div>

      <Footer />
    </div>
  );
}


export default Home;

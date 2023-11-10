import React from 'react';
import NavBar from './navbar'
import '../components/style.css';
import BG from '../background.jpg'


const HomePage = () => {
  return (
    <>
    <NavBar />
    <div className="mainSection">
        <div className="home">
           <img className="imghome" src={BG} alt=''/>
           <a href='/about'><button  class="home_btn">Read More</button></a>
        </div>
    </div>
        
    
    </>
  );
};

export default HomePage;

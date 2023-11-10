import React from 'react'
import NavBar from './navbar'
import '../components/style.css';
import Video from '../asc.mp4'

function about() {
  return (
    <>
     <NavBar/>
     <section className="about_section layout_padding-bottom">
            <div className="container">
            <div className="detail-box">
                <h2>
                About E-Cycle
                </h2>
                <p>
                E-Waste Recycling is the responsible and eco-conscious <br/>process of reusing and repurposing discarded electronic devices,<br/> preventing environmental harm and conserving valuable<br/> resources for a sustainable future
                </p>
            </div>
            </div>
            <div className='about_video'> 
              <video className='video' src={Video} autoPlay loop/>
            </div>
    </section>
    </>
  );
};

export default about
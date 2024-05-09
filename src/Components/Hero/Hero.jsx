import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Untitled design (1).png";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero">
      
      <img src={profile_img} alt="" />
      
      <h1><span>I'm Kasun Rasanjana</span>, Development intern.</h1>
      
      <p align="center">
        Graduate in Physical Science and Computer Studies, proficient in
        programming,and problem-solving, adaptable <br/> to new
        technologies, excellent communication, and team player.
      </p>
     
      <div className="hero-action">
        
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
     
      </div>
    </div>
  );
};

export default Hero;

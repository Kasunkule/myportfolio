import React from "react";
import "./About.css";
import theme_pattern from "../../assets/chevron-double-regular.svg";
import profile_img from "../../assets/mypic.jpg";

function About() {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I have shown the capacity to stay academically successful while
              adjusting to changing technology.
            </p>
            <p>
              Outstanding interpersonal abilities and a cooperative team
              member prepared to provide value to creative initiatives bridging
              computer science and physical science.
            </p>
          </div>
          <div className="about-skills">
          <div className="about-skill"><p>HTML</p><hr style={{width:"80%"}}/></div>
          <div className="about-skill"><p>CSS</p><hr style={{width:"70%"}}/></div>
          <div className="about-skill"><p>JavaScipt</p><hr style={{width:"50%"}}/></div>
          <div className="about-skill"><p>React</p><hr style={{width:"60%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Years of Experience</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Projects Completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;

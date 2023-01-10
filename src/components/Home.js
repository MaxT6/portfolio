import skills from "../JSON/skills.json";
import headshot from "../assests/headshot-no-backgroud.png"; // images accesed this way must be in src
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Popup from "./Popup";
import axios from "axios";
import Games from "./Games";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import resume from '../PDF/resume.pdf';
import Contact from "./Contact";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();
    let post = { name: name, email: email, message: message };
    let regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    try {
        if (name === "" || email === "" || message === "") {
            toast.error("Please fill out all fields")
        } else if (!regEx.test(email)) {
            toast.error("Please enter a valid email address")
        }
        else {
            await axios.post("/api/contact", post);
            toast.success("Message Sent!")
            setName('')
            setEmail('')
            setMessage('')
        }

    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="home">
      <header className="header-container">
        <div className="header-txt-container">
          <h1 className="header-title">Maximilian Thiel</h1>
          <h2 className="header-subtitle">Full Stack Web Developer</h2>
        </div>
          <div className="socials">
            <div className="social-container">
              <a href="https://github.com/MaxT6" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faSquareGithub} /></a>
              <span className="social-txt">GitHub</span>
            </div>
            <div className="social-container">
              <a href="https://www.linkedin.com/in/maximilianthiel/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
              <span className="social-txt">LinkedIn</span>
            </div>
            <div className="social-container">
              <a href={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faFileAlt} /></a>
              <span className="social-txt">Resume</span>
            </div>
          </div>
      </header>
      <div className="body-container">
      <section className="about-me-container">
        <div className="about-txt-container">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-txt">
          I am a graduate of BloomTech's Full Stack Web Development course. As a former middle school teacher, I seek to build applications that help students learn. I enjoy challenges and am always looking for my next problem to solve. 
          </p>
        </div>
        <div className="img-container">
          <img
            className="headshot"
            src={headshot}
            alt="The website's creator. He looks very handsome."
          />
        </div>
      </section>
      <section className="skills-section">
        <div>
          <h2 className="skills-title">My Skills</h2>
        </div>
      
      <div className="icons-container">
        {skills.map((skill) => {
          return (
            <div className="skill-card-container" key={skill.id}>
              <div className="skill-card">
                <div className="skill-text">
                  <h3 className="skill-name">{skill.name}</h3>
                  {/* <h3 className="skill-name-small-media">{skill.name}</h3> */}
                  <span className="skill-text-just-text">{skill.txt}</span>
                </div>
                <div className="icon-buttons" 
                  onClick={() => {
                   ( buttonPopup === false ?  setButtonPopup(true) : setButtonPopup (false))
                  } }> 
                  <Popup trigger={buttonPopup}>
                      <h3 className="skill-name-popup">{skill.name}</h3>
                  </Popup>
                  <div className="skill-img-container">
                      <img className="skill-img" src={skill.img} alt="Icons for my coding skills" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </section>
      <section>
        <Games />
      </section>
      {/* <section className="form">
        <div className="get-in-touch-container">
          <h2 className="get-in-touch">Get In Touch</h2>
        </div>
        <div className="contact-text-container">
          <span className="contact-text">
            I'd love to hear from you about a project or if you're simply just
            curious about something, I'm always available and happy to answer
            any questions! 
          </span>
        </div>
        <form className="contact-form">
          <div className="input-div">
            <label className="label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-input"
              type="text"
            />
          </div>

          <div className="input-div">
            <label className="label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-input"
              type="email"
            />
          </div>

          <div className="input-div">
            <label className="label">Message</label>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-input"
              type="text"
            />
          </div>
        </form>
        <div className="btn-content">
          <button onClick={onSubmit}>Send IT!</button>
        </div>
      </section> */}
      <section>
        <Contact />
      </section>
      </div>
    </div>
  );
};

export default Home;

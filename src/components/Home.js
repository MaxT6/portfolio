import skills from "../JSON/skills.json";
import headshot from "../assests/headshot-no-backgroud.png";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let post = { name: name, email: email, message: message };
    let regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    try {
        if (name == "" || email == "" || message == "") {
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
      </header>
      <section className="about-me-container">
        <div className="about-txt-container">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-txt">
            I am a graduate of BloomTech's Full Stack Web Development course. As a former middle school teacher, I seek to build applications that help students learns. I enjoy challeneges and am always looking for my next problem to solve. 
          </p>
        </div>
        <div className="img-container">
          <img
            className="headshot"
            src={headshot}
            alt="The picture of the website's creator. He looks very handsome."
          />
        </div>
      </section>
      <section className="skills-section">
        <div>
          <h2 className="skills-title">My Skills</h2>
        </div>
      </section>
      <div className="icons-container">
        {skills.map((skill) => {
          return (
            <div className="skill-card-container" key={skill.id}>
              <div className="skill-card">
                <div className="skill-text">
                  <h3>{skill.name}</h3>
                  <span>{skill.txt}</span>
                </div>
                <div className="skill-img-container">
                    <img className="skill-img" src={skill.img} alt="Icons for my coding skills" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <section className="form">
        <div className="get-in-touch-div">
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
      </section>
    </div>
  );
};

export default Home;

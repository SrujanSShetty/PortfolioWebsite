import React from 'react';
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import './App.css';

function App() {
  return (
    <div>
      <header className="header-react">
        <nav>
          <div className="logo">Portfolio.</div>
          {/* Nav structure continues… */}
        </nav>
      </header>
      <section className="home-section-react">
        <div className="home-content-react">
          <h2>Hello, It's Me</h2>
          <h1>Srujan Shekar Shetty</h1>
          <h3>
            And I'm a <span className="highlight animated-role">People Analytics Specialist</span>
          </h3>
          <p>
            Passionate about leveraging data and technology to drive organizational success.<br />
            Specialized in people analytics, workforce reporting, interactive dashboards, and creative tech.
          </p>
          <div className="socials">
            <a href="https://linkedin.com/in/srujanshetty" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn"/></a>
            <a href="https://github.com/SrujanSShetty" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub"/></a>
            <a href="mailto:srujansshettyofficial@gmail.com"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Gmail"/></a>
          </div>
          <div className="button-row">
            <a className="btn btn-glow" href="/Srujan_HRDataAnalyst_Resume.pdf" download>
              Download CV
            </a>
          </div>
        </div>
        <motion.div
          className="yt-creative-container"
          initial={{ opacity: 0, y: 70, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.3 }}
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.28}
            glareColor="#ff1744"
            tiltMaxAngleX={20}
            tiltMaxAngleY={22}
            scale={1.07}
          >
            <motion.a
              href="https://www.youtube.com/@srjstreams4836"
              className="yt-glass-card"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{
                boxShadow: "0 0 50px #ff174499, 0 0 32px #fff5",
                scale: 1.05,
                rotate: [0, 3, -3, 0],
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="yt-animate-dot"></span>
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                alt="YouTube"
                className="yt-main-icon"
              />
              <span className="yt-feature-title">
                SRJSTREAMS <span className="subscribe-burst">YouTube</span>
              </span>
              <motion.div
                className="yt-feature-desc"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
              >
                I also stream games and create gaming content as a creative outlet in my free time. Check out my channel!
              </motion.div>
            </motion.a>
          </Tilt>
        </motion.div>
      </section>
    </div>
  );
}

export default App;

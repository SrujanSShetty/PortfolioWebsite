import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./App.css";
import { Icon } from '@iconify/react';
import profileImg from './assets/profile.jpg'; 
// If About.js is in src/, otherwise adjust path accordingly

/* NAVBAR */
function Navbar() {
  return (
    <nav>
      <div className="logo">Portfolio.</div>
      <ul id="nav-ul">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div id="menu-btn" className="menu-btn">&#9776;</div>
    </nav>
  );
}

/* HERO */
function Hero() {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h2>Hello, It's Me</h2>
        <h1>Srujan Shekar Shetty</h1>
        <h3>
          And I'm a{" "}
          <span className="highlight animated-role">
            <Typewriter
              words={[
                "People Analytics Specialist",
                "Data Engineer",
                "Workforce Reporting Expert",
                "BI Dashboard Builder",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </span>
        </h3>
        <p>
          Passionate about leveraging data and technology to drive organizational success.<br />
          Specialized in people analytics, workforce reporting, and building insightful dashboards using SQL, Power BI, and modern HRIS tools.
        </p>
        <div className="socials">
          <a href="https://linkedin.com/in/srujanshetty" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" /></a>
          <a href="https://github.com/SrujanSShetty" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub"/></a>
          <a href="mailto:srujansshettyofficial@gmail.com"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Gmail"/></a>
        </div>
        <div className="button-row">
          <a className="btn btn-glow" href="Srujan_HRDataAnalyst_Resume.pdf" download>Download CV</a>
        </div>
      </div>
      <motion.div
        className="srjstreams-feature yt-animated"
        whileHover={{ scale: 1.045 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.75 }}
      >
        <motion.a
          href="https://www.youtube.com/@srjstreams4836"
          className="srjstreams-btn main-btn"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ boxShadow: "0 0 42px #ff1744cc, 0 0 16px #fff3" }}
        >
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" className="yt-icon"/>
          SRJSTREAMS
        </motion.a>
        <div className="srjstreams-desc">
          I stream games and create gaming content as my creative outlet!<br/>
          <b>Check out my channel for fun, strategy, and adrenaline.</b>
        </div>
        <div className="yt-shine"/>
      </motion.div>
    </section>
  );
}

/* HORIZONTAL EXPERIENCE TIMELINE */
function ExperienceTimeline() {
  const jobs = [
    {
      company: "ITM Smart Lab, Illinois Institute of Technology",
      title: "Big Data Engineer",
      dates: "Jan 2025 - Present",
      points: [
        "Developed 7 ETL pipelines using PySpark/Scala and MariaDB(SQL) to translate raw data into optimized insights, increasing processing speed by 40%.",
        "Optimized lab infrastructure by deploying 15 GPU-enhanced servers and configuring KVM switches for improved system performance.",
        "Compressed and optimized 1M+ sales and employee records using Iz4/Snappy/Brotli, cutting storage needs by 25%.",
        "Applied secure Git/OAuth2 development practices to align with compliance protocols.",
      ],
    },
    {
      company: "NetConnect Global",
      title: "Business Intelligence Analyst",
      dates: "May 2022 - Jul 2023",
      points: [
        "Partnered with cross-functional teams to design 10+ HR dashboards, turning complex data into actionable client insights.",
        "Transformed HR data (lifecycle, compensation, recruitment) using SQL into dashboards in Power BI for workforce planning and talent strategy with RBAC implementation.",
        "Built ad-hoc and recurring HR dashboards to track employee progression, pipeline health, and campaign ROI.",
        "Generated workforce reports using CEIPAL ATS, a platform similar to Workday.",
        "Streamlined analysis of 15K+ records using SQL and Python, enhancing report clarity and speed.",
        "Maintained 95%+ KPI accuracy via SQL/Power Query validation pipelines for strategic reporting.",
        "Improved Power BI performance with optimized DAX and query folding techniques.",
      ],
    },
    {
      company: "Aspire Tele-Solutions",
      title: "Data Analyst",
      dates: "Sep 2021 - Apr 2022",
      points: [
        "Built Tableau dashboards for clients like OLA, streamlining reporting workflows and improving insight delivery.",
        "Automated HRIS reports using pivot tables, formulas, and VBA, enhancing data tracking and usability.",
        "Conducted data integrity checks across multiple datasets using SQL and Power Query, improving reporting accuracy.",
        "Translated complex requirements into effective visual analytics, supporting better business decisions.",
      ],
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="experience-horizontal-section" id="experience">
      <h2>Work <span className="highlight">Experience</span></h2>
      <div className="horizontal-timeline-track">
        {jobs.map((job, i) => (
          <React.Fragment key={i}>
            <motion.div
              className={`horizontal-timeline-card${activeIdx === i ? " active" : ""}`}
              onClick={() => setActiveIdx(i)}
              whileHover={{ scale: 1.04 }}
              animate={{ boxShadow: activeIdx === i ? "0 0 24px #4fc3f788" : "" }}
            >
              <div className={`timeline-h-dot${activeIdx === i ? " dot-active" : ""}`}/>
              <div className="timeline-h-content">
                <div className="timeline-title">{job.title}</div>
                <div className="timeline-company">{job.company}</div>
                <div className="timeline-dates">{job.dates}</div>
                <ul>
                  {job.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            </motion.div>
            {i !== jobs.length - 1 && (
              <div className="timeline-h-connector">
                <motion.span
                  animate={{
                    background: activeIdx > i
                      ? "linear-gradient(90deg,#4fc3f7 100%,#212434 0%)"
                      : "linear-gradient(90deg,#4fc3f7aa 40%,rgba(60,70,90,0.6) 120%)"
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

/* ABOUT */
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-img neon-glow">
        <img src={profileImg} alt="Profile"/>
      </div>
      <div className="about-content">
        <h2>About <span className="highlight">Me</span></h2>
        <h3>BI People Data Analyst | M.S., Data Analytics &amp; Management</h3>
        <p>
          Extensive experience in people analytics, dashboard creation, and HR data engineering.<br />
          Skilled with SQL, Power BI, Excel, Python, Tableau, and HRIS tools (Workday, Ceipal, SuccessFactors).<br />
          Track record of designing robust data pipelines, automating HR operations, and building impactful business dashboards. Always learning and passionate about creative problem-solving!
        </p>
      </div>
    </section>
  );
}

/* PORTFOLIO (Projects) */
function Portfolio() {
  const projects = [

    {
      img: "srj-portfolio/src/assets/People Analytics Chicago.png",
      title: "People Analytics Chicago",
      desc: "Created a Looker Studio dashboard using LinkedIn data. Full web ETL process and no-code deployment.",
      url: "https://sites.google.com/view/peopleanalyticschicago?usp=sharing"
    },
    {
      img: "srj-portfolio/src/assets/Workforce Attendance Analytics.png",
      title: "Workforce Attendance Analytics",
      desc: "Built Power BI dashboards to monitor attendance, hybrid work, and leave trends for HR planning.",
      url: "https://github.com/YourUser/WorkforceAttendance"
    },
    {
      img: "srj-portfolio/src/assets/People Attrition Risk Model.png",
      title: "People Attrition Risk Model",
      desc: "Predicted employee turnover using Random Forest with 84% accuracy.Identified key drivers like income, overtime, and tenure",
      url: "https://github.com/SrujanSShetty/Employee-Attrition-Prediction-Using-RandomForest"
    },
    {
      img: "srj-portfolio/src/assets/Customer Segmentation and Behavior Analysis.png",
      title: "Customer Segmentation and Behavior Analysis",
      desc: "Segmented customers using RFM and K-Means clustering.Uncovered purchase patterns via association rule mining.",
      url: "https://github.com/SrujanSShetty/Customer-segmentation-of-Online-gift-store"
    },
    {
      img: "srj-portfolio/src/assets/Spotify Stream Trends Uncovered.jpg",
      title: "Spotify Stream Trends Uncovered",
      desc: "Built Power BI dashboard to reveal artist popularity and stream patterns.Used API and DENEB for visuals and time-based insights.",
      url: "https://github.com/SrujanSShetty/Enhancing-Music-Streaming-Insights-with-Spotify-Dashboard."
    },
    {
      img: "srj-portfolio/src/assets/CareerConnect Platform.gif",
      title: "CareerConnect Platform",
      desc: "Automated career services data with Python ETL and SQL. Power BI dashboards for placement rates and communications automation.",
      url: "https://www.iit.edu/career-services/about"
    },
  ];
  return (
    <section className="portfolio-section" id="projects">
      <h2>Latest <span className="highlight">Projects</span></h2>
      <div className="portfolio-container">
        {projects.map((p,i) => (
          <motion.a
            className="portfolio-item"
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.063, boxShadow: "0 0 44px #4FC3F7" }}>
            <img src={p.img} alt={p.title}/>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* SERVICES */
function Services() {
const cards = [
  {
    icon: "https://img.icons8.com/color/96/000000/python.png",
    title: "Python Automation",
    desc: "Leverage advanced Python tools to automate tasks, develop intelligent bots, and streamline workflows for greater business efficiency."
  },
  {
    icon: "https://img.icons8.com/color/96/000000/database.png",
    title: "SQL Data Engineering",
    desc: "Design and implement robust, scalable SQL databases tailored to your project goals, ensuring data integrity and actionable insights."
  },
  {
    icon: "https://img.icons8.com/external-flatarticons-blue-flatarticons/64/external-analytics-digital-marketing-flatarticons-blue-flatarticons.png",
    title: "DataVisualization & Analytics",
    desc: "Turn complex data into impactful visual dashboards using PowerBI, Tableau, Looker and comprehensive analyses for HR and business decisions."
  }
];


  return (
    <section className="services-section" id="services">
      <h2>Services <span className="highlight">I Offer</span></h2>
      <div className="services-container">
        {cards.map((c, i) => (
          <motion.div
            className="service-card"
            key={i}
            whileHover={{ scale: 1.07, boxShadow: "0 0 42px #4FC3F7,0 4px 48px #001b3688" }}
            whileTap={{ scale: 0.98, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
<motion.div
  className="icon service-icon"
  whileHover={{
    scale: 1.13
  }}
  whileTap={{
    scale: 1.06
  }}
  transition={{ type: "spring", stiffness: 350 }}
>
  <img src={c.icon} alt={c.title + " icon"} />
</motion.div>

            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


/* CONTACT */
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact <span className="highlight">Me!</span></h2>
      <form className="contact-form" autoComplete="off">
        <div className="form-row">
          <input type="text" name="name" placeholder="Full name" required/>
          <input type="email" name="email" placeholder="Email address" required/>
        </div>
        <div className="form-row">
          <input type="text" name="phone" placeholder="Mobile number"/>
          <input type="text" name="subject" placeholder="Email subject"/>
        </div>
        <textarea rows={4} name="message" placeholder="Your message" required/>
        <button type="submit" className="btn btn-glow">Send Message</button>
      </form>
    </section>
  );
}

/* FOOTER */
function Footer() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} Srujan Shekar Shetty. All Rights Reserved.
    </footer>
  );
}

/* MAIN EXPORT */
export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>              {/* <-- About me first! */}
      <ExperienceTimeline/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

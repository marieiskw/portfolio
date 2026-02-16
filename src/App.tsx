import profilePic from "./assets/profile_pic.png";
import minOrdbog from "./assets/min-ordbog.png";

import GithubIcon from "./assets/github.svg?react";
import LinkedinIcon from "./assets/linkedin.svg?react";
import MailIcon from "./assets/email.svg?react";

import { FaLink } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiSass } from "react-icons/si";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <ul className="headerItems">
        <li>
          <a className="headerItem" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="headerItem" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="headerItem" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <img src={profilePic} alt="profile_pic" className="profilePic" />
      <h1 className="name">Marie Ishikawa</h1>
      <div className="heroSection">
        <h2 className="heroTitle">Full-stack developer</h2>
        <p className="heroDescription">
          3+ years of professional backend experience mainly in Java,
          <br />
          now focused on building clean, type-safe web apps with React &
          TypeScript.
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="wrapper">
      <div className="sectionTitle">About</div>
      <section>
        Backend engineer with 3+ years professional experience in Java.
        Currently focused on frontend development using React and TypeScript. I
        enjoy building clean, maintainable systems and collaborating in small
        teams.
      </section>
      <div className="sectionSubtitle">Skills</div>
      <section className="skills">
        <SiReact className="skillIcon" />
        <SiJavascript className="skillIcon" />
        <SiHtml5 className="skillIcon" />
        <SiCss3 className="skillIcon" />
        <SiSass className="skillIcon" />
        <FaJava className="skillIcon" />
      </section>
    </div>
  );
}

function Projects() {
  const projectsInfoArray = [
    {
      id: 1,
      projectTitle: "min-ordbog",
      projectExplanation: "Danish vocabulary learning app",
      skillUsed: "React, Javascript, HTML, CSS, SASS, Supabase, Vercel",
      // ref: firstProjectElement,
      // photo: newsAppPhoto,
      photoAltText: "min-ordbog image",
      gitHubPageLink: "https://github.com/marieiskw/min-ordbog",
    },
  ];

  const openCode = () => {
    window.open("https://github.com/marieiskw/min-ordbog");
  };
  const openMinOrdbog = () => {
    window.open("https://min-ordbog.vercel.app/");
  };

  return (
    <div id="projects" className="wrapper">
      <div className="sectionTitle">Projects</div>
      <div className="project">
        <img src={minOrdbog} alt="min-ordbog" className="projectPhoto" />
        <div className="titleWrapper">
          <div className="projectTitle">
            min-ordbog
            <div className="projectLink">
              <GithubIcon className="linkIcon" onClick={openCode} />
              <FaLink className="linkIcon" onClick={openMinOrdbog} />
            </div>
          </div>
          <div className="techStack">
            React | JavaScript | HTML | CSS | SASS | Vercel
          </div>
        </div>
        <section className="appDescription">
          A personal dictionary app to efficiently memorize Danish vocabulary.
        </section>
      </div>
    </div>
  );
}

function Contact() {
  const openGithub = () => {
    window.open("https://github.com/marieiskw");
  };
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/marie-ishikawa/");
  };
  const openMail = () => {
    window.location.href = "mailto:marieeestenflod@gmail.com";
  };

  return (
    <div id="contact" className="contact">
      <div className="sectionTitle">Contact</div>
      <div className="icons">
        <GithubIcon className="icon" onClick={openGithub} />
        <LinkedinIcon className="icon" onClick={openLinkedIn} />
        <MailIcon className="iconMail" onClick={openMail} />
      </div>
    </div>
  );
}

function Footer() {
  return <div className="footer">ⓒ2026 💛 Marie Ishikawa</div>;
}

import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";
import { ReactComponent as MailIcon } from "./assets/email.svg";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <ul className="headerItems">
        <li className="headerItem">About</li>
        <li className="headerItem">Projects</li>
        <li className="headerItem">Contact</li>
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <img
        src="./image/profile_pic.png"
        alt="profile_pic"
        className="profilePic"
      />
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
    <div>
      <h2 className="sectionTitle">About</h2>
      <section>
        Backend engineer with 3+ years professional experience in Java.
        Currently focused on frontend development using React and TypeScript. I
        enjoy building clean, maintainable systems and collaborating in small
        teams.
      </section>
      <h3>Skills</h3>
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
  return (
    <div>
      <h2 className="sectionTitle">Projects</h2>
    </div>
  );
}

function Contacts() {
  return (
    <div className="contacts">
      <h2 className="sectionTitle">Contacts</h2>
      <div className="icons">
        <GithubIcon className="icon" />
        <LinkedinIcon className="icon" />
        <MailIcon className="iconMail" />
      </div>
    </div>
  );
}

function Footer() {
  return <div className="footer">ⓒ2026 💛 Marie Ishikawa</div>;
}

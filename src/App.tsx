import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <ul className="headerItems">
        <li className="headerItem">Home</li>
        <li className="headerItem">Projects</li>
        <li className="headerItem">Contact</li>
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div className="profile">
      <img
        src="./img/profile_pic.png"
        alt="profile_pic"
        className="profilePic"
      />
      <section className="profileSection">Marie Ishikawa</section>
    </div>
  );
}

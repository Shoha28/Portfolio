import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#works" className="nav-link">
          Works
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
    </nav>
  );
}

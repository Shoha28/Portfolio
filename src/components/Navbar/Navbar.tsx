import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#about" className="nav-link">
          {t("nav.about")}
        </a>
        <a href="#works" className="nav-link">
          {t("nav.works")}
        </a>
        <a href="#contact" className="nav-link">
          {t("nav.contact")}
        </a>
      </div>
      <div className="navbar-controls">
        <button onClick={toggleLanguage} className="lang-toggle">
          {i18n.language === "en" ? "DE" : "EN"}
        </button>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}

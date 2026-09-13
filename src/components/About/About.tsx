import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";
import uzbekistanOutline from "../../assets/uzb.svg";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="about-text-col">
          <h2 className="about-title">{t("about.title")}</h2>
          <p className="about-text">{t("about.text")}</p>
          <div className="about-actions">
            <a href="/CV.pdf" download className="about-btn about-btn-primary">
              <Download size={16} />
              {t("about.downloadCV")}
            </a>
            <a
              href="https://github.com/Shoha28"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn about-btn-secondary"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shoha-kayumov/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn about-btn-secondary"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="about-map-col">
          <div className="about-map-wrapper">
            <div
              className="about-map"
              style={{
                WebkitMaskImage: `url(${uzbekistanOutline})`,
                maskImage: `url(${uzbekistanOutline})`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
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

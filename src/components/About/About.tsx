import { useTranslation } from "react-i18next";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2 className="about-title">{t("about.title")}</h2>
        <p className="about-text">{t("about.text")}</p>
      </div>
    </section>
  );
}

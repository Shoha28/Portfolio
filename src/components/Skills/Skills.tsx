import { useTranslation } from "react-i18next";
import "./Skills.css";

const skills: string[] = [
  "Python",
  "PyTorch",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Data Analysis",
  "Web Scraping",
  "Testing",
  "GitHub",
  "CI/CD",
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-container">
      <div className="skills-content">
        <h2 className="skills-title">{t("skills.title")}</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

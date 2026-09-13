import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Github removed from here
import { FaGithub } from "react-icons/fa";
import "./Works.css";

interface Project {
  key: string;
  tech: string[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    key: "dataResearch",
    tech: ["Python", "GitHub API", "asyncio"],
    githubUrl: "https://github.com/Shoha28/data_research",
  },
  {
    key: "danceData",
    tech: ["Python", "pyfixest", "Stata"],
    githubUrl: "https://github.com/Shoha28/dance_data_analysis",
  },
  {
    key: "probly",
    tech: [
      "Python",
      "PyTorch",
      "Uncertainty Quantification",
      "Testing",
      "CI/CD",
    ],
    githubUrl: "https://github.com/D4V1ND/probly",
  },
  {
    key: "manage",
    tech: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Shoha28/Manage",
  },
  {
    key: "bank",
    tech: ["JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Shoha28/Bank",
  },
];

export default function Works() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340; // roughly one card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="works" className="works-container">
      <div className="works-content">
        <h2 className="works-title">{t("works.title")}</h2>

        <div className="works-slider-wrapper">
          <button
            className="slider-arrow slider-arrow-left"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="works-slider" ref={scrollRef}>
            {projects.map((project) => (
              <div key={project.key} className="project-card">
                <div className="project-body">
                  <h3 className="project-title">
                    {t(`works.${project.key}.title`)}
                  </h3>
                  <p className="project-description">
                    {t(`works.${project.key}.description`)}
                  </p>
                  <div className="project-tags">
                    {project.tech.map((tech) => (
                      <span key={tech} className="project-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className="slider-arrow slider-arrow-right"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

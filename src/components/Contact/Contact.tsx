import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();
  const email = "shoha28kyu@gmail.com";

  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">{t("contact.title")}</h2>
        <p className="contact-text">{t("contact.text")}</p>

        <a href={`mailto:${email}`} className="contact-btn">
          <Mail size={18} />
          {t("contact.cta")}
        </a>

        <p className="contact-email">{email}</p>
      </div>
    </section>
  );
}

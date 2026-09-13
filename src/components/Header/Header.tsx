import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="header-container">
      <header className="header-content">
        <h1 className="header-name">Shoha Kayumov</h1>
        <p className="header-role">{t("header.role")}</p>
      </header>
    </div>
  );
}

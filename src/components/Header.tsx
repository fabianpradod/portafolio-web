import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const { lang, toggle } = useLanguage();

  return (
    <header className="header">
      <a className="header__brand" href="#top">
        FP
      </a>
      <nav className="header__nav">
        <a href="#about">{content.navAbout[lang]}</a>
        <a href="#projects">{content.navProjects[lang]}</a>
        <button
          className="lang-toggle"
          onClick={toggle}
          aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </nav>
    </header>
  );
}
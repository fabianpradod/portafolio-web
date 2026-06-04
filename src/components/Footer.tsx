import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="https://github.com/fabianpradod" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/fabian-prado-016072264/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:fabian.pradodluz@gmail.com">Email</a>
      </div>
      <p className="footer__note">
        © {new Date().getFullYear()} Fabian Prado · {content.footerRights[lang]}
      </p>
    </footer>
  );
}
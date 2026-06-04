import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="hero">
      <h1 className="hero__name">Fabian Prado Dluzniewski</h1>
      <p className="hero__tagline">{content.heroTagline[lang]}</p>
      <a className="hero__cta" href="#projects">
        {content.heroCtaProjects[lang]}
      </a>
    </section>
  );
}
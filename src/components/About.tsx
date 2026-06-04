import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { lang } = useLanguage();

  return (
    <section className="about" id="about">
      <h2 className="section-title">{content.aboutTitle[lang]}</h2>
      <p className="about__body">{content.aboutBody[lang]}</p>
    </section>
  );
}
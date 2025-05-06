import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import Typical from "react-typical";
import AOS from "aos";
import "aos/dist/aos.css";
import mainScene from "../animations/Main Scene.json";
import "./About.css";

function About() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>{t("about.title")}</h1>
        <p>{t("about.tagline")}</p>

        <Typical
          steps={[
            "Transcribe smarter.",
            1500,
            "Translate globally.",
            1500,
            "Trust Transcripto.",
            1500,
          ]}
          loop={Infinity}
          wrapper="p"
          className="typing-effect"
        />

        <div className="about-animation">
          <Lottie animationData={mainScene} style={{ width: 300, height: 300 }} />
        </div>
      </section>

      <section className="about-two-columns">
        <div className="about-column" data-aos="fade-right">
          <h2>🌟 {t("about.featuresTitle")}</h2>
          <ul>
            <li>🎧 {t("about.feature1")}</li>
            <li>🌍 {t("about.feature2")}</li>
            <li>📄 {t("about.feature3")}</li>
            <li>🔐 {t("about.feature4")}</li>
          </ul>
        </div>
        <div className="about-column" data-aos="fade-left">
          <h2>🎯 {t("about.purposeTitle")}</h2>
          <p>{t("about.purpose1")}</p>
          <p>{t("about.purpose2")}</p>
        </div>
      </section>

      <section className="about-philosophy" data-aos="fade-up">
        <h2>🧠 Our Philosophy</h2>
        <p><strong>Simple, yet powerful</strong></p>
        <p>
          Using the latest in artificial intelligence, Transcripto has built an advanced
          transcription, translation, subtitling, and analysis platform. From simple transcripts
          to full-scale video production, our platform supports workflows in nearly every language.
        </p>
        <p>
          Designed to be both simple and powerful, Transcripto eliminates the tedious work,
          letting you focus on what truly matters.
        </p>
      </section>

      
    </div>
  );
}

export default About;

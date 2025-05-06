import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import boy from "../animations/boy.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FAQ.css";

function FAQ() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="faq-container">
      <h2 className="faq-title">{t("faq.title")}</h2>

      <div className="faq-animation" data-aos="zoom-in">
        <Lottie animationData={boy} style={{ width: 250, height: 250 }} />
      </div>

      <div className="faq-grid">
        <div className="faq-box" data-aos="fade-up">
          <h4>{t("faq.q1")}</h4>
          <p>{t("faq.a1")}</p>
        </div>
        <div className="faq-box" data-aos="fade-up" data-aos-delay="100">
          <h4>{t("faq.q2")}</h4>
          <p>{t("faq.a2")}</p>
        </div>
        <div className="faq-box" data-aos="fade-up" data-aos-delay="200">
          <h4>{t("faq.q3")}</h4>
          <p>{t("faq.a3")}</p>
        </div>
        <div className="faq-box" data-aos="fade-up" data-aos-delay="300">
          <h4>{t("faq.q4")}</h4>
          <p>{t("faq.a4")}</p>
        </div>
        <div className="faq-box" data-aos="fade-up" data-aos-delay="400">
          <h4>{t("faq.q5")}</h4>
          <p>{t("faq.a5")}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

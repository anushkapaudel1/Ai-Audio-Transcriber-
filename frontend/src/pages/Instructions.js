import React from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import micAnimation from "../animations/microphone.json";
import "./Instructions.css";

function Instructions() {
  const { t } = useTranslation();

  return (
    <div className="instructions-container">
      {/* 🎤 Animated microphone */}
      <div className="instructions-animation">
        <Lottie animationData={micAnimation} style={{ width: 180, height: 180 }} />
      </div>

      <h2 className="instructions-title">{t("instructions.title")}</h2>

      <div className="instructions-columns">
        <div className="instructions-box">
          <h3>Transcribe in Three Simple Steps</h3>
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-description">{t("instructions.step1")}</div>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-description">{t("instructions.step2")}</div>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-description">{t("instructions.step3")}</div>
          </div>
        </div>

        <div className="instructions-box">
          <h3>{t("instructions.formats")}</h3>
          <p><strong>{t("instructions.videoFormats")}</strong></p>
          <p><strong>{t("instructions.audioFormats")}</strong></p>
        </div>
      </div>

      <p className="instructions-contact">{t("instructions.contact")}</p>
    </div>
  );
}

export default Instructions;

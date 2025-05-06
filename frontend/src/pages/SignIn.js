import React from "react";
import { useTranslation } from "react-i18next";

function SignIn() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "120px 20px", textAlign: "center" }}>
      <h2>{t("signin.title")}</h2>
      <p>{t("signin.desc")}</p>
      <button>{t("signin.button")}</button>
    </div>
  );
}

export default SignIn;

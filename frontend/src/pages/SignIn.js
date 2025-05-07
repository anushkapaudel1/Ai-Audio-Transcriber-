import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "../animations/login.json";
import supabase from "../supabase";
import "./SignIn.css";
import { FaGoogle, FaGithub } from "react-icons/fa";

function SignIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleSignIn = async () => {
    setLoading(true);
    setMessage("🔐 Logging in...");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(`❌ ${error.message}`);
    } else {
      setMessage("✅ Signed in successfully!");
      navigate("/");
    }
    setLoading(false);
  };

  const handleSignUp = async () => {
    setLoading(true);
    setMessage("📝 Creating account...");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(`❌ ${error.message}`);
    } else {
      setMessage("✅ Account created! Check your email to confirm.");
    }
    setLoading(false);
  };

  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      console.error("OAuth error:", error.message);
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-animation">
        <Lottie animationData={loginAnimation} style={{ width: 180, height: 180 }} />
      </div>

      <h2 className="signin-title">{t("signin.title")}</h2>

      <div className="signin-box">
        <input
          type="email"
          placeholder="📧 Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="🔑 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignIn}
          className="signin-box-button signin-btn"
          disabled={loading}
        >
          {loading ? "🔄 Signing in..." : "🔐 Sign In"}
        </button>

        <button
          onClick={handleSignUp}
          className="signin-box-button signup-btn"
          disabled={loading}
        >
          {loading ? "🔄 Creating..." : "📝 Sign Up"}
        </button>

        <p className="signin-message">{message}</p>

        <div className="oauth-section">
          <p>🔑 {t("signin.or")}:</p>

          <button
            onClick={() => handleOAuthLogin("google")}
            className="signin-box-button google-btn"
          >
            <FaGoogle size={18} />
            Sign in with Google
          </button>

          <button
            onClick={() => handleOAuthLogin("github")}
            className="signin-box-button github-btn"
          >
            <FaGithub size={18} />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

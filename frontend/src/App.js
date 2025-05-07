import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Instructions from "./pages/Instructions";
import FAQ from "./pages/FAQ";
import Lottie from "lottie-react";
import audioAnimation from "./animations/audio.json";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import logo from './assets/logo.png';
import supabase from "./supabase";

// Set THREE globally BEFORE initializing Vanta
window.THREE = THREE;

function Home({ file, handleFileChange, handleTranscribe, loading, transcript }) {
  const { t } = useTranslation();
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    if (!vantaEffectRef.current && vantaRef.current) {
      vantaEffectRef.current = WAVES({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x80d8ff,
        backgroundColor: 0xe0f7fa,
        shininess: 100,
        waveHeight: 25,
        waveSpeed: 1.2,
        zoom: 1.2,
      });
      console.log("✅ Vanta initialized");
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
        console.log("🧹 Vanta destroyed");
      }
    };
  }, []);

  const downloadTranscript = () => {
    const element = document.createElement("a");
    const fileBlob = new Blob([transcript], { type: "text/plain" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = "transcript.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <main className="hero" ref={vantaRef}>
      <div className="hero__container">
        <h1 className="hero__heading">{t("welcome")}</h1>
        <p className="hero__description">{t("description")}</p>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", marginTop: "10px" }}>
          <Lottie animationData={audioAnimation} style={{ width: 200, height: 200 }} />
        </div>

        <div className="upload-section">
          <input type="file" accept="audio/*" onChange={handleFileChange} />
          <button className="transcribe-button" onClick={handleTranscribe}>
            {loading ? t("transcribing") : t("transcribe")}
          </button>
          {transcript && (
            <div style={{ marginTop: "20px" }}>
              <p>{transcript}</p>
              <button className="download-button" onClick={downloadTranscript}>
                📥 {t("download") || "Download Transcript"}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState("");
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Login status check
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session?.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleTranscribe = async () => {
    if (!file) {
      alert(t("upload"));
      return;
    }

    setLoading(true);
    setTranscript("");

    const formData = new FormData();
    formData.append("audio", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      try {
        const data = JSON.parse(text);
        if (res.ok && data.transcription) {
          setTranscript(data.transcription);
        } else {
          setTranscript("❌ Transcription failed.");
        }
      } catch (err) {
        console.error("Server did not return valid JSON:", text);
        setTranscript("❌ Something went wrong on the server.");
      }
    } catch (err) {
      console.error("Error during transcription:", err);
      setTranscript("⚠️ Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const toggleLangMenu = () => setShowLangMenu((prev) => !prev);

  return (
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <header className="navbar">
          <div className="navbar__container">
            <Link to="/" className="navbar__logo">
              <img src={logo} alt="Logo" className="navbar__logo-img" />
            </Link>

            <nav className="navbar__menu">
              <Link to="/" className="navbar__links">{t("nav.home")}</Link>
              <Link to="/about" className="navbar__links">{t("nav.about")}</Link>
              <Link to="/instructions" className="navbar__links">{t("nav.instructions")}</Link>
              <Link to="/faq" className="navbar__links">{t("nav.faq")}</Link>

              {!isLoggedIn ? (
                <Link to="/signin">
                  <button className="navbar__cta-btn">{t("nav.signin")}</button>
                </Link>
              ) : (
                <button className="navbar__cta-btn" onClick={handleLogout}>
                  {t("Signout") || "Sign Out"}
                </button>
              )}

              <div className="lang-switcher">
                <span onClick={toggleLangMenu} className="lang-icon" title="Change language">🌐</span>
                {showLangMenu && (
                  <ul className="lang-menu">
                    <li onClick={() => { i18n.changeLanguage('en'); setShowLangMenu(false); }}>English</li>
                    <li onClick={() => { i18n.changeLanguage('fi'); setShowLangMenu(false); }}>Suomi</li>
                    <li onClick={() => { i18n.changeLanguage('ja'); setShowLangMenu(false); }}>日本語</li>
                    <li onClick={() => { i18n.changeLanguage('es'); setShowLangMenu(false); }}>Español</li>
                  </ul>
                )}
              </div>
            </nav>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <Home
              file={file}
              handleFileChange={handleFileChange}
              handleTranscribe={handleTranscribe}
              loading={loading}
              transcript={transcript}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Anushka's Audio Transcriber</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  "en": {
    "translation": {
      "nav": {
        "home": "Home",
        "about": "About",
        "faq": "FAQ",
        "instructions": "Instructions",
        "signin": "Sign In"
      },
      "welcome": "Welcome to the AI Audio Transcriber",
      "description": "Convert your audio to text quickly and easily.",
      "transcribe": "Transcribe",
      "transcribing": "Transcribing...",
      "upload": "Upload audio",
      "download": "Download transcription",
      "about": {
        "title": "About AI Audio Transcriber",
        "tagline": "Turning voice into text using the power of AI and modern web technology.",
        "desc1": "AI Audio Transcriber is a web-based application that uses artificial intelligence to convert audio files into written text. It is powered by Whisper, a speech recognition model developed by OpenAI.",
        "desc2": "Built with a React frontend and connected to an AI backend, this tool offers fast, simple, and secure speech-to-text conversion directly from your browser.",
        "featuresTitle": "Key Features",
        "feature1": "Upload audio files and receive instant transcripts",
        "feature2": "Supports multiple languages via Whisper",
        "feature3": "Clean and simple interface — no installation required",
        "feature4": "Secure backend processing (your data stays private)",
        "purposeTitle": "Purpose of the Project",
        "purpose1": "This app was developed as a university thesis project to demonstrate how modern AI models can be used to build helpful, accessible web tools.",
        "purpose2": "The project aims to explore AI integration into real-world frontend/backend systems, making advanced technology easy to use.",
        "footer": "Created by Anushka Paudel • 2025"
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "q1": "Is this free?",
        "a1": "Yes! This web app is built as part of a thesis project and is free to use.",
        "q2": "What formats can I upload?",
        "a2": "Common formats like MP3, WAV, MP4, M4A, and more are supported.",
        "q3": "Can I transcribe in other languages?",
        "a3": "Yes! The app supports over 50+ languages using Whisper’s multilingual model.",
        "q4": "How is my data used?",
        "a4": "Your uploaded audio is only used to generate transcriptions. No data is stored long-term.",
        "q5": "Who made this?",
        "a5": "This app was developed by Anushka Paudel as a university thesis project."
      },
      "instructions": {
        "title": "Transcribe in Three Simple Steps",
        "step1": "Upload audio or video — Drag and drop your file or click 'Upload file'",
        "step2": "Transcribe — Click 'Transcribe' and let the AI convert speech to text",
        "step3": "Download — Get your text as .docx, .txt, .srt or .xlsx",
        "formats": "Supported Formats",
        "videoFormats": "Video: MP4, MKV, FLV, AVI, MOV, WMV",
        "audioFormats": "Audio: M4A, MP3, OGG, AAC, WAV, FLAC, WMA",
        "contact": "Is your format not supported? Contact us at: help@any2text.com"
      },
      "signin": {
        "title": "Sign In",
        "desc": "This is a placeholder sign-in page. You can implement login logic here later.",
        "button": "Sign in with Google"
      }
    }
  },

"fi": {
  "translation": {
    "nav": {
      "home": "Etusivu",
      "about": "Tietoa",
      "faq": "UKK",
      "instructions": "Ohjeet",
      "signin": "Kirjaudu sisään"
    },
    "welcome": "Tervetuloa AI-äänitranskriptorin pariin",
    "description": "Muunna äänesi tekstiksi nopeasti ja helposti.",
    "transcribe": "Transkriboi",
    "transcribing": "Transkriboidaan...",
    "upload": "Lataa ääni",
    "download": "Lataa transkriptio",
    "about": {
      "title": "Tietoa AI-äänitranskriptorista",
      "tagline": "Muunna ääni tekstiksi tekoälyn ja modernin web-teknologian avulla.",
      "desc1": "AI Audio Transcriber on verkkopohjainen sovellus, joka käyttää tekoälyä muuntaakseen äänitiedostot kirjoitetuksi tekstiksi. Sen taustalla toimii OpenAI:n kehittämä Whisper-puheentunnistusmalli.",
      "desc2": "React-etupään ja AI-taustajärjestelmän avulla tämä työkalu tarjoaa nopean, yksinkertaisen ja turvallisen puheesta tekstiksi -muunnoksen suoraan selaimestasi.",
      "featuresTitle": "🔑 Keskeiset ominaisuudet",
      "feature1": "🎧 Lataa äänitiedostoja ja saat välittömät transkriptiot",
      "feature2": "🌍 Tukee useita kieliä Whisperin avulla",
      "feature3": "📄 Selkeä ja yksinkertainen käyttöliittymä — ei asennuksia",
      "feature4": "🔐 Turvallinen taustakäsittely (tietosi pysyvät yksityisinä)",
      "purposeTitle": "🎯 Projektin tarkoitus",
      "purpose1": "Tämä sovellus kehitettiin opinnäytetyöprojektina osoittamaan, miten modernia tekoälyä voidaan hyödyntää käytännön verkkotyökaluissa.",
      "purpose2": "Tavoitteena on tutkia tekoälyn integrointia todellisiin frontend/backend-järjestelmiin helppokäyttöisessä muodossa.",
      "footer": "Tekijä: Anushka Paudel • 2025"
    },
    "faq": {
      "title": "Usein kysytyt kysymykset",
      "q1": "Onko tämä ilmainen?",
      "a1": "Kyllä! Tämä verkkosovellus on tehty opinnäytetyönä ja on ilmainen käyttää.",
      "q2": "Mitä tiedostomuotoja voin ladata?",
      "a2": "Yleisiä muotoja kuten MP3, WAV, MP4, M4A ja monia muita tuetaan.",
      "q3": "Voinko transkriboida muilla kielillä?",
      "a3": "Kyllä! Sovellus tukee yli 50 kieltä Whisperin monikielisellä mallilla.",
      "q4": "Miten tietojani käytetään?",
      "a4": "Lähettämiäsi ääniä käytetään vain transkriptioiden tekemiseen. Tietoja ei säilytetä pitkäaikaisesti.",
      "q5": "Kuka tämän teki?",
      "a5": "Tämän sovelluksen kehitti Anushka Paudel opinnäytetyöprojektina."
    },
    "instructions": {
      "title": "Transkriboi kolmella yksinkertaisella askeleella",
      "step1": "Lataa ääni- tai videotiedosto — vedä ja pudota tai valitse tiedosto",
      "step2": "Transkriboi — Napsauta 'Transkriboi' ja anna tekoälyn muuntaa puhe tekstiksi",
      "step3": "Lataa — Saat tekstin .docx, .txt, .srt tai .xlsx -muodossa",
      "formats": "Tuetut tiedostomuodot",
      "videoFormats": "Video: MP4, MKV, FLV, AVI, MOV, WMV",
      "audioFormats": "Ääni: M4A, MP3, OGG, AAC, WAV, FLAC, WMA",
      "contact": "Eikö muotoasi tueta? Ota yhteyttä: help@any2text.com"
    },
    "signin": {
      "title": "Kirjaudu sisään",
      "desc": "Tämä on esimerkkisivu kirjautumista varten. Voit myöhemmin lisätä kirjautumislogiikan.",
      "button": "Kirjaudu Googlella"
    }
  }
},


 


  "ja": {
  "translation": {
    "nav": {
      "home": "ホーム",
      "about": "概要",
      "faq": "よくある質問",
      "instructions": "使い方",
      "signin": "ログイン"
    },
    "welcome": "AI音声文字起こしへようこそ",
    "description": "音声をすばやく簡単にテキストに変換します。",
    "transcribe": "文字起こし",
    "transcribing": "文字起こし中...",
    "upload": "音声をアップロード",
    "download": "文字起こしをダウンロード",
    "about": {
      "title": "AI音声文字起こしについて",
      "tagline": "AIと最新のWeb技術を使って音声をテキストに変換します。",
      "desc1": "AI Audio Transcriberは、音声ファイルをテキストに変換するために人工知能を使用するWebベースのアプリケーションです。OpenAIが開発した音声認識モデルWhisperによって動作します。",
      "desc2": "ReactのフロントエンドとAIバックエンドを使用し、このツールは高速・シンプル・安全な音声からテキストへの変換をブラウザ上で提供します。",
      "featuresTitle": "🔑 主な特徴",
      "feature1": "🎧 音声ファイルをアップロードして即座に文字起こしを取得",
      "feature2": "🌍 Whisperによる多言語対応",
      "feature3": "📄 シンプルで直感的なインターフェース — インストール不要",
      "feature4": "🔐 安全なバックエンド処理（データは非公開）",
      "purposeTitle": "🎯 プロジェクトの目的",
      "purpose1": "このアプリは、現代のAIモデルを使って有用でアクセス可能なWebツールを作成できることを示すために、大学の卒業研究として開発されました。",
      "purpose2": "本プロジェクトの目的は、AIを実際のフロントエンド／バックエンドシステムに統合し、使いやすい形で提供することです。",
      "footer": "作成者：Anushka Paudel • 2025"
    },
    "faq": {
      "title": "よくある質問",
      "q1": "これは無料ですか？",
      "a1": "はい！このWebアプリは卒業研究の一環として作成され、無料で使用できます。",
      "q2": "どのファイル形式がアップロード可能ですか？",
      "a2": "MP3、WAV、MP4、M4Aなどの一般的な形式がサポートされています。",
      "q3": "他の言語でも文字起こしできますか？",
      "a3": "はい！このアプリはWhisperの多言語モデルにより50以上の言語に対応しています。",
      "q4": "私のデータはどのように使用されますか？",
      "a4": "アップロードされた音声は文字起こしの生成にのみ使用され、長期間保存されることはありません。",
      "q5": "これは誰が作成しましたか？",
      "a5": "このアプリはAnushka Paudelが大学の卒業研究として開発しました。"
    },
    "instructions": {
      "title": "3つの簡単なステップで文字起こし",
      "step1": "音声または動画ファイルをアップロード — ファイルをドラッグ＆ドロップするか「ファイルをアップロード」をクリック",
      "step2": "文字起こし — 「文字起こし」ボタンをクリックし、AIが音声をテキストに変換",
      "step3": "ダウンロード — .docx、.txt、.srt、.xlsx形式でテキストを取得",
      "formats": "対応形式",
      "videoFormats": "動画: MP4, MKV, FLV, AVI, MOV, WMV",
      "audioFormats": "音声: M4A, MP3, OGG, AAC, WAV, FLAC, WMA",
      "contact": "形式がサポートされていませんか？こちらへご連絡ください: help@any2text.com"
    },
    "signin": {
      "title": "ログイン",
      "desc": "これはログインページのプレースホルダーです。後でログイン機能を追加できます。",
      "button": "Googleでログイン"
    }
  }
},

 "es": {
  "translation": {
    "nav": {
      "home": "Inicio",
      "about": "Acerca de",
      "faq": "Preguntas",
      "instructions": "Instrucciones",
      "signin": "Iniciar sesión"
    },
    "welcome": "Bienvenido al Transcriptor de Audio con IA",
    "description": "Convierte tu audio en texto rápida y fácilmente.",
    "transcribe": "Transcribir",
    "transcribing": "Transcribiendo...",
    "upload": "Subir audio",
    "download": "Descargar transcripción",
    "about": {
      "title": "Acerca del Transcriptor de Audio con IA",
      "tagline": "Convierte voz en texto usando la potencia de la IA y la tecnología web moderna.",
      "desc1": "AI Audio Transcriber es una aplicación web que utiliza inteligencia artificial para convertir archivos de audio en texto escrito. Está impulsada por Whisper, un modelo de reconocimiento de voz desarrollado por OpenAI.",
      "desc2": "Construido con un frontend en React y un backend con IA, esta herramienta ofrece una conversión de voz a texto rápida, simple y segura directamente desde tu navegador.",
      "featuresTitle": "🔑 Características principales",
      "feature1": "🎧 Sube archivos de audio y recibe transcripciones instantáneas",
      "feature2": "🌍 Compatible con múltiples idiomas mediante Whisper",
      "feature3": "📄 Interfaz limpia y sencilla — no requiere instalación",
      "feature4": "🔐 Procesamiento seguro en el backend (tus datos permanecen privados)",
      "purposeTitle": "🎯 Propósito del proyecto",
      "purpose1": "Esta aplicación fue desarrollada como un proyecto de tesis universitaria para demostrar cómo los modelos de IA modernos pueden utilizarse para construir herramientas web útiles y accesibles.",
      "purpose2": "El objetivo del proyecto es explorar la integración de IA en sistemas frontend/backend reales, haciendo la tecnología avanzada fácil de usar.",
      "footer": "Creado por Anushka Paudel • 2025"
    },
    "faq": {
      "title": "Preguntas frecuentes",
      "q1": "¿Es gratis?",
      "a1": "¡Sí! Esta aplicación web fue creada como parte de un proyecto de tesis y es gratuita.",
      "q2": "¿Qué formatos puedo subir?",
      "a2": "Se admiten formatos comunes como MP3, WAV, MP4, M4A, entre otros.",
      "q3": "¿Puedo transcribir en otros idiomas?",
      "a3": "¡Sí! La app admite más de 50 idiomas gracias al modelo multilingüe de Whisper.",
      "q4": "¿Cómo se utilizan mis datos?",
      "a4": "Tu audio subido solo se usa para generar transcripciones. No se almacena de forma permanente.",
      "q5": "¿Quién hizo esto?",
      "a5": "Esta aplicación fue desarrollada por Anushka Paudel como proyecto de tesis universitaria."
    },
    "instructions": {
      "title": "Transcribe en tres pasos simples",
      "step1": "Sube audio o video — Arrastra y suelta el archivo o haz clic en 'Subir archivo'",
      "step2": "Transcribe — Haz clic en 'Transcribir' y deja que la IA convierta el habla en texto",
      "step3": "Descarga — Obtén tu texto en formato .docx, .txt, .srt o .xlsx",
      "formats": "Formatos compatibles",
      "videoFormats": "Video: MP4, MKV, FLV, AVI, MOV, WMV",
      "audioFormats": "Audio: M4A, MP3, OGG, AAC, WAV, FLAC, WMA",
      "contact": "¿Tu formato no está soportado? Contáctanos en: help@any2text.com"
    },
    "signin": {
      "title": "Iniciar sesión",
      "desc": "Esta es una página de ejemplo de inicio de sesión. Puedes implementar la lógica de acceso más adelante.",
      "button": "Iniciar sesión con Google"
    }
  }
},

};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

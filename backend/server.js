console.log("API Key:", process.env.OPENAI_API_KEY);

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure Multer to handle file uploads
const upload = multer({ dest: "uploads/" });

// Test Route to check if backend is working
app.get("/", (req, res) => {
  res.send("AI Transcriber Backend is Running!");
});

// Upload audio file route
app.post("/upload", upload.single("audio"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  try {
    // Read the uploaded file & send it to OpenAI Whisper API
    const formData = new FormData();
    formData.append("file", fs.createReadStream(req.file.path));
    formData.append("model", "whisper-1");

    const response = await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      formData,
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          ...formData.getHeaders()
        }
      }
    );

    // Return the transcription
    res.json({ transcription: response.data.text });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing audio file");
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

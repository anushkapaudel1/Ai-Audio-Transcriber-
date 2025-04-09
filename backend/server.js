const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("AI Transcriber Backend is Running (AssemblyAI)!");
});

app.post("/upload", upload.single("audio"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  try {
    // Step 1: Upload the audio file to AssemblyAI
    const uploadRes = await axios({
      method: "post",
      url: "https://api.assemblyai.com/v2/upload",
      headers: {
        authorization: process.env.ASSEMBLYAI_API_KEY,
        "content-type": "application/octet-stream",
      },
      data: fs.createReadStream(req.file.path),
    });

    const audioUrl = uploadRes.data.upload_url;

    // Step 2: Request transcription
    const transcriptRes = await axios.post(
      "https://api.assemblyai.com/v2/transcript",
      { audio_url: audioUrl },
      {
        headers: {
          authorization: process.env.ASSEMBLYAI_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    const transcriptId = transcriptRes.data.id;

    // Step 3: Poll until transcription is done
    let completed = false;
    let transcriptText = "";

    while (!completed) {
      await new Promise((r) => setTimeout(r, 3000)); // Wait 3s

      const pollingRes = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
        {
          headers: {
            authorization: process.env.ASSEMBLYAI_API_KEY,
          },
        }
      );

      if (pollingRes.data.status === "completed") {
        completed = true;
        transcriptText = pollingRes.data.text;
      } else if (pollingRes.data.status === "error") {
        throw new Error("Transcription failed");
      }
    }

    res.json({ transcription: transcriptText });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error during transcription");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

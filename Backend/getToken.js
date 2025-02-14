import express from "express";
import { google } from "googleapis";
import open from "open";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

// ✅ Load credentials from .env
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = `http://localhost:${PORT}/oauth2callback`;

// ✅ Ensure credentials are set
if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("❌ CLIENT_ID or CLIENT_SECRET is missing. Check your .env file.");
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Start Express server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await authenticateUser();
});

// ✅ Generate Authorization URL
async function authenticateUser() {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.readonly"],
    prompt: "consent",
  });

  console.log("\n🔗 Open this URL in your browser to authorize:\n", authUrl);
  await open(authUrl);
}

// ✅ OAuth Callback Route
app.get("/oauth2callback", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("❌ Authorization code is missing.");
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    console.log("\n✅ Access Token:", tokens.access_token);
    console.log("🔄 Refresh Token:", tokens.refresh_token);

    res.send("✅ Authorization successful! Check your console for tokens.");
  } catch (error) {
    console.error("❌ Error retrieving access token:", error);
    res.status(500).send("❌ Failed to retrieve tokens.");
  }
});

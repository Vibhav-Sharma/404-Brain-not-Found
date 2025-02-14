const express = require("express");
const cors = require("cors");
const session = require("express-session");
const fs = require("fs");
const { oAuth2Client, getAuthUrl, getAccessToken, loadToken } = require("./auth");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Redirect user to Google Auth
app.get("/auth/google", (req, res) => {
  res.redirect(getAuthUrl());
});

// Google OAuth2 callback
app.get("/oauth2callback", async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send("No code provided");

  try {
    await getAccessToken(code);
    res.send("✅ Authentication Successful! Go back to your app.");
  } catch (error) {
    console.error("OAuth Error:", error);
    res.status(500).send("❌ Authentication failed");
  }
});

// Fetch Emails
app.get("/emails", async (req, res) => {
  const token = loadToken();
  if (!token) return res.status(401).send("OAuth2 Client not found. Authenticate first.");

  const gmail = require("googleapis").google.gmail({ version: "v1", auth: oAuth2Client });

  try {
    const response = await gmail.users.messages.list({ userId: "me", maxResults: 5 });
    const messages = response.data.messages || [];
    res.json(messages);
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).send("❌ Failed to fetch emails");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});

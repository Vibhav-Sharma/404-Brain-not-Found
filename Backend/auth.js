import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

// Initialize OAuth2 Client
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Set credentials using the refresh token
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Function to get a new access token
async function getAccessToken() {
  try {
    const { token } = await oauth2Client.getAccessToken();
    console.log("✅ Access Token:", token);
    return token;
  } catch (error) {
    console.error("❌ Error getting access token:", error);
    return null;
  }
}

export { oauth2Client, getAccessToken };

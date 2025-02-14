// // import { google } from "googleapis";
// // import { getAccessToken, oauth2Client } from "./auth.js";

// // // Function to fetch emails
// // async function fetchEmails() {
// //   try {
// //     const accessToken = await getAccessToken();
// //     if (!accessToken) {
// //       console.error("❌ Failed to get access token");
// //       return [];
// //     }

// //     const gmail = google.gmail({ version: "v1", auth: oauth2Client });

// //     // Get the list of emails
// //     const response = await gmail.users.messages.list({
// //       userId: "me",
// //       maxResults: 10, // Fetch latest 10 emails
// //     });

// //     const messages = response.data.messages || [];

import { google } from "googleapis";
import { getAccessToken, oauth2Client } from "./auth.js";
import { summarizeText } from "./summarizeEmail.js"; // Import summarization function

// Function to fetch and summarize emails
async function fetchEmails() {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      console.error("❌ Failed to get access token");
      return [];
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    // Get the list of latest 10 emails
    const response = await gmail.users.messages.list({
      userId: "me",
      maxResults: 10,
    });

    const messages = response.data.messages || [];
    if (messages.length === 0) {
      console.log("📭 No emails found.");
      return [];
    }

    // Fetch email details and summarize
    const emails = await Promise.all(
      messages.map(async (msg) => {
        const email = await gmail.users.messages.get({
          userId: "me",
          id: msg.id,
        });

        const snippet = email.data.snippet;

        // Summarize email content
        const summary = await summarizeText(snippet);

        return {
          id: email.data.id,
          snippet,
          summary: summary || "⚠️ Summary not available",
        };
      })
    );

    console.log("📩 Fetched Emails with Summaries:", emails);
    return emails;
  } catch (error) {
    console.error("❌ Error fetching emails:", error);
    return [];
  }
}

// Test function
fetchEmails();

export { fetchEmails };

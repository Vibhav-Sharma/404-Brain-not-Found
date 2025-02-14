import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

if (!DEEPSEEK_API_KEY) {
  console.error("❌ DeepSeek API key is missing. Add it to your .env file.");
  process.exit(1);
}

export async function summarizeText(text) {
  try {
    const response = await axios.post(
      "https://api.deepseek.com/v1/summarize",
      {
        text: text,
        length: "short" // Options: "short", "medium", "long"
      },
      {
        headers: {
          "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.summary;
  } catch (error) {
    console.error("❌ Error summarizing text:", error.response?.data || error.message);
    return null;
  }
}

// Test function (Uncomment below to test)
// (async () => {
//   const summary = await summarizeText("This is a long email that needs summarization...");
//   console.log("🔹 Summary:", summary);
// })();

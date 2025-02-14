import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import { google } from "googleapis";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ Test Route
app.get("/", (req, res) => {
    res.send("AI Personal Assistant Backend is running!");
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


import { gmail } from "./gmail.js";

app.get("/emails", async (req, res) => {
    try {
        const response = await gmail.users.messages.list({ userId: "me", maxResults: 5 });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching emails:", error);
        res.status(500).json({ error: "Failed to fetch emails" });
    }
});
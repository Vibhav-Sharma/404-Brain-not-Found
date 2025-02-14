# 🚀 AI Personal Assistant Web App

## 📌 Project Description
AI-powered personal assistant that helps with **task management, email summarization, meeting scheduling, transcription, and notifications**. The web app integrates multiple APIs to automate workflow and improve productivity.

## ⚡ Features
- ✅ **AI Task Management & Prioritization** – Organizes and ranks tasks based on importance.
- ✅ **AI Chatbot for Task Automation** – Accepts natural language inputs for scheduling tasks.
- ✅ **Email Analysis & Summarization** – Fetches emails, summarizes key points, and auto-schedules meetings.
- ✅ **Meeting Scheduling & Notifications** – Auto-detects invites and schedules meetings in Google Calendar.
- ✅ **Meeting Transcription & Action Items Extraction** – Converts speech to text and extracts key action items.
- ✅ **AI-Powered Time Blocking** – Suggests optimal time slots for tasks.
- ✅ **Automated Work-Life Balance Suggestions** – Recommends breaks based on workload.

## 🏗️ Tech Stack
**Frontend:** React.js (TailwindCSS, React Router, Axios)  
**Backend:** FastAPI / Node.js (Express.js, Uvicorn, Flask for alternative)  
**Database:** Firebase / PostgreSQL  
**APIs:** Gmail API, Google Calendar API, DeepSeek API, Whisper API  
**Notifications:** Telegram Bot API / Twilio (optional)  

## 🚀 Setup Guide

### **1️⃣ Clone Repository**
```bash
git clone https://github.com/your-repo-name.git
cd ai-assistant
```

### **2️⃣ Frontend Setup**
```bash
cd frontend
npx create-react-app .
npm install axios tailwindcss react-router-dom
npm start
```

### **3️⃣ Backend Setup (FastAPI or Node.js)**
#### **FastAPI (Python Backend)**
```bash
cd backend
python -m venv env
source env/bin/activate  # (Windows: env\Scripts\activate)
pip install fastapi uvicorn requests
uvicorn main:app --reload
```

#### **Node.js (Express Backend)**
```bash
cd backend
npm init -y
npm install express axios dotenv cors nodemailer
node server.js
```

### **4️⃣ Database Setup** (Firebase or PostgreSQL)
- **Firebase:** Set up Firestore & store API keys in `.env`  
- **PostgreSQL:** Create tables for tasks & meetings  

### **5️⃣ API Key Setup**
Create a `.env` file in the `backend` folder and add:
```env
GMAIL_API_KEY=your_api_key_here
GOOGLE_CALENDAR_API_KEY=your_api_key_here
DEEPSEEK_API_KEY=your_api_key_here
WHISPER_API_KEY=your_api_key_here
```

### **6️⃣ Run the App**
```bash
# Run frontend
dcd frontend
npm start

# Run backend (FastAPI or Node.js)
cd backend
uvicorn main:app --reload  # FastAPI
node server.js  # Node.js
```

## 📜 API Integration
### **1️⃣ Gmail API (For Email Summarization & Auto-Scheduling)**
- **Enable Gmail API** in [Google Cloud Console](https://console.cloud.google.com/)
- Set up **OAuth 2.0** credentials

### **2️⃣ Google Calendar API (For Meeting Scheduling)**
- **Enable Google Calendar API** in [Google Cloud Console](https://console.cloud.google.com/)
- Use OAuth token to create events

### **3️⃣ DeepSeek API (For AI Summarization & Task Prioritization)**
- Sign up at [DeepSeek](https://www.deepseek.com)
- Generate API key & add it to `.env`

### **4️⃣ Whisper API (For Meeting Transcription)**
- Use OpenAI’s Whisper API or run it locally

### **5️⃣ Telegram Bot API (For Notifications & Reminders)**
- Create a bot using [BotFather](https://t.me/botfather)
- Get bot token & set up webhook

## 🎯 Contributors
- **Vibhav Sharma** (Backend, AI Features)  
- **Manik Dhillu** (Frontend, UI/UX)  
- **Riya Dutta** (API Integrations)  
- **Ayush Raghav** (Database & Notifications)  

## 🎤 Presentation & Demo
📌 **Prepare a 2-minute demo showcasing:**
1. **Task Automation** – Creating & prioritizing tasks
2. **Email Summarization & Auto-Scheduling**
3. **Meeting Transcription & Action Items Extraction**
4. **Notifications & Smart Reminders**


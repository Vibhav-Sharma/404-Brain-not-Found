const { google } = require('googleapis');
require('dotenv').config();
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    "http://localhost:5000/oauth2callback"
);

const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.readonly'],
});

console.log('Authorize this app by visiting this URL:', authUrl);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the code from that page here: ', async (code) => {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Your Refresh Token:', tokens.refresh_token);
    rl.close();
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173'
}

const app = express();
app.use(cors(corsOptions))
const port = 8080;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Simple conversation state
let conversation = [];

// Endpoint to handle user messages
app.post('/api/message', (req, res) => {
  const userMessage = req.body.message;

  // Basic rule-based response generation
  const botResponse = generateBotResponse(userMessage);

  // Update conversation state
  conversation.push({ user: userMessage, bot: botResponse });

  res.json({ botResponse });
});

// Rule-based response generation
function generateBotResponse(userMessage) {
  // Add your own rules here
  if (userMessage.toLowerCase().includes('hello')) {
    return 'Hi there!';
  } else {
    return 'I did not understand that.';
  }
}

// Endpoint to retrieve conversation history
app.get('/api/conversation', (req, res) => {
  res.json({ conversation });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

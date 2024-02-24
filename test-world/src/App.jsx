import React, { useState } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';

function App() {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [conversation, setConversation] = useState([]);

  const sendMessage = async () => {
    const response = await fetch('http://localhost:8080/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const responseData = await response.json();

    // Update bot response and conversation history
    setBotResponse(responseData.botResponse);
    setConversation([...conversation, { user: userMessage, bot: responseData.botResponse }]);

    // Clear the user message input
    setUserMessage('');
  };

  const loadConversation = async () => {
    const response = await fetch('http://localhost:8080/api/conversation');
    const conversationData = await response.json();
    setConversation(conversationData.conversation);
  };

  return (
    <div className="App">
      <ChatWindow />
      <h1>Chatbot API Tester</h1>

      <div>
        <label htmlFor="userMessage">Enter your message:</label>
        <input
          type="text"
          id="userMessage"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div>
        <p>Bot Response: {botResponse}</p>
      </div>

      <div>
        <h2>Conversation History</h2>
        <ul>
          {conversation.map((item, index) => (
            <li key={index}>User: {item.user} | Bot: {item.bot}</li>
          ))}
        </ul>
      </div>

      <button onClick={loadConversation}>Load Conversation History</button>
    </div>
  );
}

export default App;

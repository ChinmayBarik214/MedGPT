import React, { useState } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import InputBox from './InputBox';

function App() {
  return (
    <div className="App">
      {/* Make a header with the option to switch between light and dark mode */}
      <div className='msgs-container'>
      <ChatWindow />
      </div>
      <InputBox />
    </div>
  );
}

export default App;

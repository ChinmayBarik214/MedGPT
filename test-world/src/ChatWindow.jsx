import React from 'react'
import './ChatWindow.css';
import UserMsg from './UserMsg';
import BotMsg from './BotMsg';

function ChatWindow() {
  return (
    <div>
        {/* Header (60px height ChatWindow.css line 19:25) */}
        {/* msg-boxes */}
        <div className='chat-box'>
            <UserMsg />
            <BotMsg />
        </div>
    </div>
  )
}

export default ChatWindow
import React from 'react'
import './ChatWindow.css';


function ChatWindow() {
  return (
    <div className='msgs-container'>
        {/* Header (60px height ChatWindow.css line 19:25) */}
        {/* msg-boxes */}
        <div className='chat-box'>
            <div className='msg user-msg'>
                <p>Hi<br />
                    <span>17:45</span>
                </p>
            </div>
            <div className='msg gpt-msg'>
                <p>Hello<br />
                    <span>17:45</span>
                </p>
            </div>
            <div className='msg user-msg'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, in culpa architecto quos eligendi voluptas quae incidunt hic, delectus placeat fugit. In accusantium similique nam.<br />
                    <span>17:48</span>
                </p>
            </div>
            <div className='msg gpt-msg'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nemo.<br />
                    <span>17:48</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ChatWindow
import React from 'react'
import './InputBox.css';
import SendIcon from '@mui/icons-material/Send';

function InputBox() {
  return (
    <div className='chat-input'>
        {/* Chat input */}
        <input type='text' placeholder='How are you feeling today?'></input>
        <SendIcon />
    </div>
  )
}

export default InputBox
import React, { useRef, useState } from 'react';
import './InputBox.css';
import SendIcon from '@mui/icons-material/Send';


function InputBox() {
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState('auto');

    const handleTextareaChange = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
            setTextareaHeight(textarea.style.height);
        }
    };
    // document.getElementById('texttype').addEventListener('keyup', function () {
    //     this.style.height = 0;
    //     this.style.height = this.scrollHeight + 'px';
    // }, false)
    return (
    <div className='input-area'>
        {/* Chat input */}
        <div className='input-container'>
        <textarea
            ref={textareaRef}
            placeholder='How are you feeling today?'
            className='textarea'
            id="texttype"
            style={{ height: textareaHeight }}
            onChange={handleTextareaChange}
        />
        <SendIcon className='send-btn' />
        </div>
    </div>
  )
}

export default InputBox
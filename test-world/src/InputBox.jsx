import React, { useRef, useState } from 'react';
import './InputBox.css';
import SendIcon from '@mui/icons-material/Send';

function InputBox() {
    const textareaRef = useRef(null);
    const [textareaPaddingBottom, setTextareaPaddingBottom] = useState('34px');
    const [textareaHeight, setTextareaHeight] = useState('auto');

    const handleTextareaChange = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
            textarea.style.paddingBottom = '17px'
            setTextareaHeight(textarea.style.height);
            setTextareaPaddingBottom(textarea.style.paddingBottom)
        }
    };
    return (
    <div className='input-area'>
        {/* Chat input */}
        <div className='input-container'>
        <textarea
            rows={1}
            ref={textareaRef}
            placeholder='How are you feeling today?'
            className='textarea texttype'
            style={{ height: textareaHeight }}
            onChange={handleTextareaChange}
        />
        </div>
        {/* Send button */}
        <SendIcon className='send-btn' />
    </div>
  )
}

export default InputBox
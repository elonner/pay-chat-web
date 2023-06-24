import { useState, useEffect, useRef } from 'react';

export default function ChatSend() {
    const [message, setMessage] = useState('');
    const textAreaRef = useRef(null);
    const chatSendRef = useRef(null);
    const msgInputContainerRef = useRef(null);
    const innerMargin = 20;
    const outerMargin = 151;

    useEffect(() => {
        if (textAreaRef?.current) {
            // We need to reset the height momentarily to get the correct scrollHeight for the textarea
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;
            // We then set the height directly, outside of the render loop
            // Trying to set this with state or a ref will product an incorrect value.
            textAreaRef.current.style.height = scrollHeight + "px";

            const innerHeight = scrollHeight + innerMargin;
            const outerHeight = scrollHeight + outerMargin;
            chatSendRef.current.style.height = `${outerHeight}px`;
            msgInputContainerRef.current.style.height = `${innerHeight}px`;
        }
    }, [textAreaRef, message]);

    function handleChange(e) {
        setMessage(e.target.value);
    };

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (message === '') return;
            handleSend();
        }
    }

    function handleSend() {
        setMessage('');
        alert('send');
    }

    return (
        <div ref={chatSendRef} className="chatSend">
            <div ref={msgInputContainerRef} className="msgInputContainer">
                <textarea
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={textAreaRef}
                    rows={1}
                    placeholder="Type something..."
                    className="msgInput"
                />
                <i 
                    onClick={handleSend} 
                    className="send fa-solid fa-circle-up fa-2xl"
                ></i>
            </div>
        </div>
    );
}
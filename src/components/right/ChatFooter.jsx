import { useState, useEffect, useRef } from 'react';
import { getUser } from '../../utilities/users-service';
import { newMessage } from '../../utilities/conversations-api';

export default function ChatFooter({currProf, socket, activeConvoRef}) {
    const [message, setMessage] = useState('');
    const textAreaRef = useRef(null);
    const chatFooterRef = useRef(null);
    const msgInputContainerRef = useRef(null);
    const innerMargin = 20;
    const outerMargin = 61;

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

            if (outerHeight < 375) {
                chatFooterRef.current.style.height = `${outerHeight}px`;
                msgInputContainerRef.current.style.height = `${innerHeight}px`;
                textAreaRef.current.style.marginBottom = '';
            } else {
                textAreaRef.current.style.marginBottom = '10px';
            }
        }
    }, [textAreaRef, message]);

    function handleChange(e) {
        setMessage(e.target.value);
    };

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (message === '') return;
            handleSendMessage();
        }
    }

    function handleSendMessage() {
        if (message.trim()) {
            socket.emit('message', {
                content: message,
                //body: message,
                sender: currProf,
                //id: `${socket.id}${Math.random()}`,
                socketId: socket.id,
            });
            if (activeConvoRef.current) {
                newMessage(activeConvoRef.current, {sender: currProf, content: message});
            }
        }
        setMessage('');
    };

    return (
        <div ref={chatFooterRef} className="chatFooter">
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
                    onClick={handleSendMessage}
                    className="send fa-solid fa-circle-up fa-2xl"
                ></i>
            </div>
        </div>
    );
}
import ChatBar from '../components/ChatBar';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';
import {useState, useEffect, useRef} from 'react';
import Left from '../components/left/Left';
import Right from '../components/right/Right';

export default function ChatPage({ socket }) {
    const [messages, setMessages] = useState([]);
    const [typingStatus, setTypingStatus] = useState('');
    const lastMessageRef = useRef(null);
    
    useEffect(() => {
        socket.on('messageResponse', data => setMessages([...messages, data]));
    }, [socket, messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'})
    }, [messages]);

    useEffect(() => {
        socket.on('typingResponse', data => setTypingStatus(data));
    }, [socket]);
    
    return (
        // <div className="chat">
        //     <ChatBar socket={socket} />
        //     <div className="chat__main">
        //         <ChatBody messages={messages} lastMessageRef={lastMessageRef} typingStatus={typingStatus} />
        //         <ChatFooter socket={socket} />
        //     </div>
        // </div>
        <div className="mainPage">
            <Left />
            <Right 
                messages={messages}
                lastMessageRef={lastMessageRef} 
                socket={socket}
            />
      </div>
    );
}
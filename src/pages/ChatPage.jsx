import {useState, useEffect, useRef} from 'react';
import Left from '../components/Left/Left';
import Right from '../components/Right/Right';
import './ChatPage.css';

export default function ChatPage({ socket }) {
    const [messages, setMessages] = useState([]);
    const [activeConvo, setActiveConvo] =  useState({});
    const activeConvoRef = useRef({});
    const lastMessageRef = useRef(null);

    useEffect(() => {
        socket.on('messageResponse', data => setMessages([...messages, data]));
    }, [socket, messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'})
    }, [messages]);
    
    return (
        <div className="mainPage">
            <Left 
                activeConto={activeConvo}
                setActiveConvo={setActiveConvo}
                activeConvoRef={activeConvoRef}
            />
            <Right 
                messages={messages}
                lastMessageRef={lastMessageRef} 
                socket={socket}
                activeConto={activeConvo}
            />
      </div>
    );
}
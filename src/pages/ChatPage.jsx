import {useState, useEffect, useRef} from 'react';
import Left from '../components/Left/Left';
import Right from '../components/Right/Right';
import './ChatPage.css';

export default function ChatPage({ socket }) {
    const [messages, setMessages] = useState([]);
    const lastMessageRef = useRef(null);

    // useEffect(() => {
    //     setMessages([...messages, {body: 'yo \n my \n', sender: 'other', id: 123}])
    // }, []);
    
    useEffect(() => {
        socket.on('messageResponse', data => setMessages([...messages, data]));
    }, [socket, messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'})
    }, [messages]);
    
    return (
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
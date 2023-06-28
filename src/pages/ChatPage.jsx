import {useState, useEffect, useRef} from 'react';
import Left from '../components/Left/Left';
import Right from '../components/Right/Right';
import './ChatPage.css';
import { getOne } from '../utilities/users-api';
import { getUser } from '../utilities/users-service';

export default function ChatPage({ socket, currProf }) {
    //const [messages, setMessages] = useState([]);
    //const [activeConvo, setActiveConvo] =  useState(null);
    const activeConvoRef = useRef(null);
    if (!currProf) return 'fetching data';
    // const lastMessageRef = useRef(null);

    // useEffect(() => {
    //     socket.on('messageResponse', data => setMessages([...messages, data]));
    // }, [socket, messages]);

    // useEffect(() => {
    //     lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'});
    // }, [messages]);

    return (
        <div className="mainPage">
            <Left 
                currProf={currProf}
                activeConvoRef={activeConvoRef}
            />
            <Right 
                currProf={currProf}
                //messages={messages}
                //lastMessageRef={lastMessageRef} 
                socket={socket}
            />
      </div>
    );
}
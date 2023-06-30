import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { useState } from 'react';
import './Right.css';

export default function Right({currProf, socket, activeConvo}) {
    const [messages, setMessages] = useState([]);
    
    return (
        <div className='right'>
            {activeConvo ? 
            <>
                <ChatHeader activeConvo={activeConvo}/>
                <ChatBody socket={socket} currProf={currProf} activeConvo={activeConvo} messages={messages} setMessages={setMessages} />
                <ChatFooter socket={socket} currProf={currProf} activeConvo={activeConvo} messages={messages} setMessages={setMessages} />
            </>
            :
            null}
        </div>
    );
}
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { useState, useEffect, useRef } from 'react';
import './Right.css';

export default function Right({currProf, socket, convos, setConvos, activeConvo, messages, setMessages}) {
    const lastMessageRef = useRef(null);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'});
    }, [messages]);
    
    return (
        <div className='right'>
            {activeConvo ? 
            <>
                <ChatHeader activeConvo={activeConvo}/>
                <ChatBody 
                    socket={socket} 
                    currProf={currProf} 
                    activeConvo={activeConvo} 
                    messages={messages} 
                    setMessages={setMessages} 
                    lastMessageRef={lastMessageRef}  />
                <ChatFooter 
                    socket={socket} 
                    currProf={currProf} 
                    convos={convos}
                    setConvos={setConvos}
                    activeConvo={activeConvo} 
                    messages={messages} 
                    setMessages={setMessages} />
            </>
            :
            null}
        </div>
    );
}
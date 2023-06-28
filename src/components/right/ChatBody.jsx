import { useState, useEffect, useRef } from "react";

export default function ChatBody({ socket, currProf, activeConvo }) {
    const [messages, setMessages] = useState([]);
    const lastMessageRef = useRef(null);

    useEffect(() => {
        if (activeConvo) {
            setMessages(activeConvo.messages);
        }
    }, []);

    useEffect(() => {
        socket.on('messageResponse', data => setMessages([...messages, data]));
    }, [socket, messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'});
    }, [messages]);

    return (
        <div className="chatBody">
            {messages?.map((message) => {
                return (
                    message.sender._id === currProf._id ?
                        (
                            //This shows messages sent from you
                            <div className="msgBody user" key={message._id}>
                                <p>{message.body}</p>
                            </div>
                        ) : (
                            //This shows messages received by you
                            <div className="otherMsg" key={message._id}>
                                <p className="msgUsername">{message.sender.username}</p>
                                <div className="msgBody other">
                                    <p>{message.body}</p>
                                </div>
                            </div>
                        )
                )
            })}
        </div>
    );
}
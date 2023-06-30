import { useState, useEffect, useRef } from "react";
import { getMessages } from "../../utilities/conversations-api";

export default function ChatBody({ socket, currProf, activeConvo, messages, setMessages }) {
    const lastMessageRef = useRef(null);

    useEffect(() => {
        async function getMsgs() {
            const allMessages = await getMessages(activeConvo._id);
            setMessages(allMessages);
        }
        getMsgs();
    }, [activeConvo]);

    useEffect(() => {
        socket.on('messageResponse', data => {
            // if the messages convo is the recipient's active convo
            if (data.conversation._id === data.recipient.activeConvo && currProf._id === data.recipient._id) {
                setMessages([...messages, data]);
            }
        })
    }, [socket, messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'});
    }, [messages]);

    return (
        <div className="chatBody">
            {!messages?.length ? null : messages.map((message) => {
                return (
                    message.sender._id === currProf._id ?
                        (
                            //This shows messages sent from you
                            <div className="msgBody user" key={message._id}>
                                <p>{message.content}</p>
                            </div>
                        ) : (
                            //This shows messages received by you
                            <div className="otherMsg" key={message._id}>
                                <p className="msgUsername">{message.sender.username}</p>
                                <div className="msgBody other">
                                    <p>{message.content}</p>
                                </div>
                            </div>
                        )
                )
            })}
        </div>
    );
}
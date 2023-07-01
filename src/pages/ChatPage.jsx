import { useState, useEffect } from 'react';
import Left from '../components/Left/Left';
import Right from '../components/Right/Right';
import './ChatPage.css';
import { setActiveConvoAPI } from '../utilities/users-api';
import { getUser } from '../utilities/users-service';
import { getMessages, getAll } from "../utilities/conversations-api";

export default function ChatPage({ socket, currProf }) {
    const [activeConvo, setActiveConvo] = useState(null);
    const [messages, setMessages] = useState([]);
    const [convos, setConvos] = useState([]);

    useEffect(() => {
        if (currProf) {
            async function getConvos() {
                const allConvos = await getAll();

                setConvos(allConvos);
            }
            getConvos();
            setActiveConvo(currProf.activeConvo)
        }
    }, [currProf]);

    useEffect(() => {
        if (activeConvo) {
            async function getMsgs() {
                const allMessages = await getMessages(activeConvo._id);
                setMessages(allMessages);
            }
            getMsgs();
        }
    }, [activeConvo]);

    useEffect(() => {
        socket.on('messageResponse', data => {
            // if the messages convo is the recipient's active convo
            if (data.conversation._id === data.recipient.activeConvo && currProf?._id === data.recipient._id) {
                setMessages([...messages, data]);
            }
        })
    }, [socket, messages]);

    function selectConvo(convo) {
        return () => {
            setActiveConvo(convo);
            setActiveConvoAPI(getUser(), { activeConvo: convo });
        };
    }

    if (!currProf) return 'fetching data';

    return (
        <div className="mainPage">
            <Left
                currProf={currProf}
                convos={convos}
                selectConvo={selectConvo}
                setConvos={setConvos}
                activeConvo={activeConvo}
                setActiveConvo={setActiveConvo}
                messages={messages}
            />
            <Right
                currProf={currProf}
                convos={convos}
                setConvos={setConvos}
                activeConvo={activeConvo}
                messages={messages}
                setMessages={setMessages}
                socket={socket}
            />
        </div>
    );
}
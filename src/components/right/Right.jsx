import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './Right.css';

export default function Right({currProf, socket, messages, activeConvoRef}) {
    return (
        <div className='right'>
            <ChatHeader activeConvoRef={activeConvoRef}/>
            <ChatBody socket={socket} messages={messages} currProf={currProf} activeConvoRef={activeConvoRef} />
            <ChatFooter socket={socket} currProf={currProf} activeConvoRef={activeConvoRef} />
        </div>
    );
}
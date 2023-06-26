import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './Right.css';

export default function Right({socket, messages, activeConvo}) {
    return (
        <div className='right'>
            <ChatHeader activeConvo={activeConvo}/>
            <ChatBody messages={messages} />
            <ChatFooter socket={socket} activeConvo={activeConvo} />
        </div>
    );
}
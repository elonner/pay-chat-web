import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './Right.css';

export default function Right({currProf, socket, messages, activeConvo}) {
    return (
        <div className='right'>
            {activeConvo ? 
            <>
                <ChatHeader activeConvo={activeConvo}/>
                <ChatBody socket={socket} messages={messages} currProf={currProf} activeConvo={activeConvo} />
                <ChatFooter socket={socket} currProf={currProf} activeConvo={activeConvo} />
            </>
            :
            null}
        </div>
    );
}
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './Right.css';

export default function Right({socket, messages}) {
    return (
        <div className='right'>
            <ChatHeader />
            <ChatBody messages={messages} />
            <ChatFooter socket={socket}/>
        </div>
    );
}
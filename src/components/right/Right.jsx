import ChatHeader from './ChatHeader';
import ChatSection from './ChatSection';
import ChatSend from './ChatSend';

export default function Right({socket, messages}) {
    return (
        <div className='right'>
            <ChatHeader />
            <ChatSection messages={messages} />
            <ChatSend socket={socket}/>
        </div>
    );
}
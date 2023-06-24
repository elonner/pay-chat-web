import ChatHeader from './ChatHeader';
import ChatSection from './ChatSection';
import ChatSend from './ChatSend';

export default function Right() {
    return (
        <div className='right'>
            <ChatHeader />
            <ChatSection />
            <ChatSend />
        </div>
    );
}
import { useNavigate } from 'react-router-dom';

export default function ChatBody({ messages, lastMessageRef, typingStatus }) {
  const navigate = useNavigate();

  function handleLeaveChat() {
    localStorage.removeItem('username');
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem('username') ?
            (
              //This shows messages sent from you
              <div className="message__chats" key={message.id}>
                <p className="sender__name">You</p>
                <div className="message__sender">
                  <p>{message.text}</p>
                </div>
              </div>
            ) : (
              //This shows messages received by you
              <div className="message__chats" key={message.id}>
                <p>{message.name}</p>
                <div className="message__recipient">
                  <p>{message.text}</p>
                </div>
              </div>
            )
        )}


        {/*This is triggered when a user is typing*/}
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </div>
  );
}
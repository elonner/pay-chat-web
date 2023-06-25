export default function ChatBody({messages, lastMessageRef}) {
    
    return (
        <div className="chatBody">
            {messages?.map((message) => {
                return (
                    message.username === localStorage.getItem('username') ?
                    (
                    //This shows messages sent from you
                    <div className="msgBody user" key={message.id}>
                        <p>{message.body}</p>
                    </div>
                    ) : (
                    //This shows messages received by you
                    <div className="otherMsg" key={message.id}>
                        <p className="msgUsername">{message.username}</p>
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
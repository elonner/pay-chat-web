export default function ChatBody({ currProf, messages, lastMessageRef }) {
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
                                <div className="msgBody other" >
                                    <p>{message.content}</p>
                                </div>
                            </div>
                        )
                )
            })}
            <div ref={lastMessageRef} className='bottomMsg' />
        </div>
    );
}
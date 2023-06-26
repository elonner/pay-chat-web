import {getUser} from '../../utilities/users-service';

export default function ChatBody({messages, lastMessageRef}) {
    
    return (
        <div className="chatBody">
            {messages?.map((message) => {
                return (
                    message.sender._id === getUser()._id ?
                    (
                    //This shows messages sent from you
                    <div className="msgBody user" key={message.id}>
                        <p>{message.body}</p>
                    </div>
                    ) : (
                    //This shows messages received by you
                    <div className="otherMsg" key={message.id}>
                        <p className="msgUsername">{message.sender.username}</p>
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
export default function ChatSection({messages, lastMessageRef}) {
    // const messages = [
    //     {
    //         username: 'other_guy',
    //         body: `I'm baby tote bag unicorn four loko kogi hella iPhone. Pour-over truffaut celiac butcher thundercats meggings artisan lumbersexual four dollar toast etsy.`,
    //         id: 1
    //     }, {
    //         username: 'username',
    //         body: `Fixie glossier pickled williamsburg mixtape +1 pork belly organic`,
    //         id: 2
    //     }, {
    //         username: 'other_guy',
    //         body: `Next level edison bulb scenester vape, farm-to-table`,
    //         id: 3
    //     }, {
    //         username: 'username',
    //         body: `Fixie glossier.`,
    //         id: 4
    //     } ,{
    //         username: 'other_guy',
    //         body: `I'm baby tote bag unicorn four loko kogi hella iPhone. Pour-over truffaut celiac butcher thundercats meggings artisan lumbersexual four dollar toast etsy.`,
    //         id: 5
    //     }, {
    //         username: 'username',
    //         body: `Fixie glossier pickled williamsburg mixtape +1 pork belly organic. Fixie glossier pickled williamsburg mixtape +1 pork belly organic. Fixie glossier pickled williamsburg mixtape +1 pork belly organic`,
    //         id: 6
    //     }, {
    //         username: 'other_guy',
    //         body: `Next level edison bulb scenester vape, farm-to-table`,
    //         id: 7
    //     }, {
    //         username: 'username',
    //         body: `Fixie glossier.`,
    //         id: 8
    //     } , {
    //         username: 'other_guy',
    //         body: `I'm baby tote bag unicorn four loko kogi hella iPhone. Pour-over truffaut celiac butcher thundercats meggings artisan lumbersexual four dollar toast etsy.`,
    //         id: 9
    //     }, {
    //         username: 'username',
    //         body: `Fixie glossier pickled williamsburg mixtape +1 pork belly organic`,
    //         id: 10
    //     }, {
    //         username: 'other_guy',
    //         body: `Next level edison bulb scenester vape, farm-to-table`,
    //         id: 11
    //     }, {
    //         username: 'username',
    //         body: `Fixie glossier.`,
    //         id: 12
    //     } ,{
    //         username: 'other_guy',
    //         body: `I'm baby tote bag unicorn four loko kogi hella iPhone. Pour-over truffaut celiac butcher thundercats meggings artisan lumbersexual four dollar toast etsy.`,
    //         id: 13
    //     }, {
    //         username: 'username',
    //         body: `Fixie glossier pickled williamsburg mixtape +1 pork belly organic. Fixie glossier pickled williamsburg mixtape +1 pork belly organic. Fixie glossier pickled williamsburg mixtape +1 pork belly organic`,
    //         id: 14
    //     }, {
    //         username: 'other_guy',
    //         body: `Next level edison bulb scenester vape, farm-to-table`,
    //         id: 15
    //     }, {
    //         username: 'username',
    //         body: `Fixie glossier.`,
    //         id: 16
    //     } 
    // ],
    
    return (
        <div className="chatSection">
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
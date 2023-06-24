export default function ProfNames({person}) {
    const username = 'username';

    return (
        <div className={`profNames ${person.username === username ? "currUser" : ""}`}>
            <img src={person.img} alt="" className="profPic" />
            <div className="names">
                <h3 className="username">{person.username}</h3>
                <p className="firstLast">{person.first} {person.last}</p>
            </div>
        </div>
    );
}
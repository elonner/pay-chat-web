import './ProfNames.css';
import { getUser } from '../../utilities/users-service';

export default function ProfNames({person}) {
    return (
        <div className={`profNames ${person._id === getUser()._id ? "currUser" : ""}`}>
            <img src={person.imgUrl} alt="" className="profPic" />
            <div className="names">
                <h3 className="username">{person.username}</h3>
                <p className="firstLast">{person.first} {person.last}</p>
            </div>
        </div>
    );
}
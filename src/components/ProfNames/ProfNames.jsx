import './ProfNames.css';
import { getUser } from '../../utilities/users-service';

export default function ProfNames({ prof }) {
    return (
        <>
            {prof ?
                (
                    <div className={`profNames ${prof.user === getUser()._id ? "currUser" : ""}`}>
                        <img src={prof.imgUrl} alt="profPic" className="profPic" />
                        <div className="names">
                            <h3 className="username">{prof.username}</h3>
                            <p className="firstLast">{prof.first} {prof.last}</p>
                        </div>
                    </div>
                ) : (
                    <div className="profNames"></div>
                )}
        </>
    );
}
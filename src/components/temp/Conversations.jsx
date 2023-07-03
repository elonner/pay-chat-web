import ProfNames from '../ProfNames/ProfNames';
import formatDate from '../../utilities/formatDate';
import { getOther } from '../../utilities/users-service';

export default function Conversations({ convos, selectConvo, activeConvo }) {
    return (
        <div className='conversations'>
            {convos.sort((a, b) => {
                return new Date(b.lastMsg?.createdAt || b.updatedAt) - new Date(a.lastMsg?.createdAt || a.updatedAt);
            }).map((convo) => {
                const formattedDate = formatDate(new Date(convo.lastMsg?.createdAt || convo.updatedAt));
                return (
                    <div
                        onClick={selectConvo(convo)}
                        className={`convoSection ${convo._id === activeConvo?._id ? "activeConvo" : ""}`}
                        key={convo._id}
                    >
                        <p className="date">{formattedDate}</p>
                        <ProfNames prof={getOther(convo)} />
                        {/* {person.paymentConfirm ? <i className="green-icon fa-solid fa-check fa-3x"></i> : <></>} */}
                    </div>
                )
            })}
        </div>
    );
}
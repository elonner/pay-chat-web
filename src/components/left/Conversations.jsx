import ProfNames from '../ProfNames/ProfNames';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import formatDate from '../../utilities/formatDate';
import { getAll } from '../../utilities/conversations-api';
import { setActiveConvoAPI } from '../../utilities/users-api';
import { getUser, getOther } from '../../utilities/users-service';

export default function Conversations({ currProf, activeConvoRef }) {
    const [convos, setConvos] = useState([]);
    const activeDivRef = useRef(null);

    useEffect(() => {
        async function getConvos() {
            const allConvos = await getAll();
            setConvos(allConvos);
        }
        getConvos();
        activeConvoRef.current = currProf.activeConvo;
    }, []);

    function selectConvo(convo) {
        return function (e) {
            activeConvoRef.current = convo;
            setActiveConvoAPI(getUser(), {activeConvo: convo});
            const clickedDiv = e.currentTarget;

            clickedDiv.classList.add('activeConvo');
            if (activeDivRef.current && activeDivRef.current !== clickedDiv) {
                activeDivRef.current.classList.remove('activeConvo');
            }
            activeDivRef.current = clickedDiv;
        };
    }

    return (
        <div className='conversations'>
            {convos.sort((a, b) => b.updatedAt - a.updatedAt).map(convo => {
                const formattedDate = formatDate(new Date(convo.updatedAt));
                return (
                    <Link to="" key={convo._id}>
                        <div onClick={selectConvo(convo)} className="convoSection">
                            <p className="date">{formattedDate}</p>
                            <ProfNames prof={getOther(convo)} />
                            {/* {person.paymentConfirm ? <i className="green-icon fa-solid fa-check fa-3x"></i> : <></>} */}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}
import ProfNames from '../ProfNames/ProfNames';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import formatDate from '../../utilities/formatDate';
import { getAll } from '../../utilities/conversations-api';
import { setActiveConvoAPI } from '../../utilities/users-api';
import { getUser, getOther } from '../../utilities/users-service';

export default function Conversations({ currProf, convos, setConvos, activeConvo, setActiveConvo }) {
    useEffect(() => {
        async function getConvos() {
            const allConvos = await getAll();
            setConvos(allConvos);
        }
        getConvos();
        setActiveConvo(currProf.activeConvo)
    }, []);

    function selectConvo(convo) {
        return () => {
            setActiveConvo(convo);
            setActiveConvoAPI(getUser(), { activeConvo: convo });
        };
    }

    return (
        <div className='conversations'>
            {convos.sort((a, b) => (new Date(b.updatedAt)) - (new Date(a.updatedAt))).map(convo => {
                const formattedDate = formatDate(new Date(convo.updatedAt));
                return (
                    <Link to="" key={convo._id}>
                        <div
                            onClick={selectConvo(convo)}
                            className={`convoSection ${convo._id === activeConvo?._id ? "activeConvo" : ""}`}
                        >
                            <p className="date">{formattedDate}</p>
                            <ProfNames prof={getOther(convo)} />
                            {/* {convo._id === activeConvo._id ? console.log(getOther(convo)) : null} */}
                            {/* {person.paymentConfirm ? <i className="green-icon fa-solid fa-check fa-3x"></i> : <></>} */}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}
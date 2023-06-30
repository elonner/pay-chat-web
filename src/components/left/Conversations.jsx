import ProfNames from '../ProfNames/ProfNames';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import formatDate from '../../utilities/formatDate';
import { getAll, getRecentDate } from '../../utilities/conversations-api';
import { setActiveConvoAPI } from '../../utilities/users-api';
import { getUser, getOther, getRecDate } from '../../utilities/users-service';

export default function Conversations({ currProf, convos, setConvos, activeConvo, setActiveConvo, messages }) {
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
            {convos.sort((a, b) => {
                // // console.log(b);
                // const valB = await getRecentDate(b._id);
                // // console.log(a);
                // const valA = await getRecentDate(a._id);
                // // console.log(valB, new Date(valB))
                // return (new Date(valB))-(new Date(valA));
                return getRecDate(messages, b) - getRecDate(messages, a);
            }).map((convo) => {
                const formattedDate = formatDate(getRecDate(messages, convo));
                // const rawDate = await getRecentDate(convo._id);
                // // console.log(rawDate)
                // const formattedDate = formatDate(new Date(rawDate));
                return (
                    // <Link to="" key={convo._id}>
                        <div
                            onClick={selectConvo(convo)}
                            className={`convoSection ${convo._id === activeConvo?._id ? "activeConvo" : ""}`}
                            key={convo._id}
                        >
                            <p className="date">{formattedDate}</p>
                            <ProfNames prof={getOther(convo)} />
                            {/* {person.paymentConfirm ? <i className="green-icon fa-solid fa-check fa-3x"></i> : <></>} */}
                        </div>
                    // </Link>
                )
            })}
        </div>
    );
}
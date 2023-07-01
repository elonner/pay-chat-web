import ProfNames from '../ProfNames/ProfNames';
import NewConvoPop from '../PopUps/NewConvoPop';
import { getUser, logOut } from '../../utilities/users-service';
import { getAllAvailable } from '../../utilities/users-api';
import { useState, useEffect } from 'react';

export default function ProfHeader({ currProf, convos, setConvos, setActiveConvo }) {
    const [seen, setSeen] = useState(false);
    const [usernames, setUsernames] = useState([]);

    useEffect(() => {
        async function getUsernames() {
            const allProfs = await getAllAvailable();
            setUsernames(allProfs.map(prof => prof.username));
        }
        getUsernames();
    }, []);

    function togglePop() {
        setSeen(!seen);
    }

    return (
        <div>
            <div className='profHeader'>
                <p onClick={logOut} className='logOut'>Log Out</p>
                <ProfNames prof={currProf} />
                <i onClick={togglePop} className="green-icon fa-regular fa-pen-to-square fa-2x"></i>
            </div>
            {seen ?
                <NewConvoPop
                    toggle={togglePop}
                    usernames={usernames}
                    setUsernames={setUsernames}
                    convos={convos}
                    setConvos={setConvos}
                    setActiveConvo={setActiveConvo}
                />
                : null}
        </div>
    );
}
import ProfNames from '../ProfNames/ProfNames';
import NewConvoPop from '../PopUps/NewConvoPop';
import { getUser, logOut } from '../../utilities/users-service';
import { getAll } from '../../utilities/users-api';
import { useState, useEffect } from 'react';

export default function ProfHeader() {
    const [seen, setSeen] = useState(false);
    const [usernames, setUsernames] = useState([]);

    useEffect(() => {
        async function getUsernames() {
            const allPeople = await getAll();
            setUsernames(allPeople.map(person => person.username));
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
                <ProfNames person={getUser()} />
                <i onClick={togglePop} className="green-icon fa-regular fa-pen-to-square fa-2x"></i>
            </div>
            {seen ? <NewConvoPop toggle={togglePop} usernames={usernames} /> : null}
        </div>
    );
}
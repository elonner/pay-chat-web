import './NewConvoPop.css'
import Select from 'react-select';
import {useState} from 'react';
import {newConvo} from '../../utilities/conversations-api';

export default function NewConvoPop({toggle, usernames, setUsernames, convos, setConvos, setActiveConvo}) {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    function handleCancel() {
        toggle();
    }

    function handleChange(selected) {
        setUsername(selected.value);
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const conversation = await newConvo({username});
            toggle(); //might remove
            const idx = usernames.findIndex(u => u === username);
            const usernamesCopy = [...usernames];
            usernamesCopy.splice(idx, 1);
            setUsernames(usernamesCopy);
            setActiveConvo(conversation);
            setConvos([...convos, conversation]);
        } catch (err) {

            console.log(err);
        }
    }

    const options = usernames.map(username => ({ value: username, label: username }));

    return (
        <div className="newConvoPop">
            <i onClick={handleCancel} className="cancel fa-solid fa-xmark fa-xl"></i>
            <h3>Select User</h3>
            <Select 
                options={options} 
                value={{ value: username, label: username }}
                onChange={handleChange}
                isSearchable 
                name="username" 
                className='selectUser'
            />
            <button onClick={handleSubmit} className="submitBtn">CHAT</button>
            <p className="errorMsg">{error}</p>
        </div>
    );
}
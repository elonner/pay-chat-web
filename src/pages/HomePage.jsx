import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ logIn }) {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        logIn(username);
        setUsername('');
        localStorage.setItem('username', username);
        navigate('/chat');
    }

    return (
        <form className="homeContainer" onSubmit={handleSubmit}>
            <h2 className="homeHeader">Sign in to Pay Chat</h2>
            <label htmlFor="username">Username: </label>
            <input 
                type="text" 
                name="username"
                id='username'
                className='usernameInput'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button className="homeCta">SIGN IN</button>
        </form>
    );
}
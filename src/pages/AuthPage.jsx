import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ setUsername }) {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setUsername(name);
        setName('');
        localStorage.setItem('username', name);
        navigate('/chat');
    }

    return (
        <form className="homeContainer" onSubmit={handleSubmit}>
            <h2 className="homeHeader">Sign in to Pay Chat</h2>
            <label htmlFor="name">Username: </label>
            <input 
                type="text" 
                name="username"
                id='username'
                className='usernameInput'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button className="homeCta">SIGN IN</button>
        </form>
    );
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './AuthForms.css';

export default function LoginForm({ setUser, showLogin, setShowLogin }) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError('');
    }

    async function handleSubmit(e) {
        // Prevent form from being submitted to the server
        e.preventDefault();
        try {
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
            navigate('/chat');
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit} className="form login">
                    <label>Username:
                        &nbsp;
                        <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                    </label>
                    <label>Password:
                        &nbsp;
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    </label>
                    <button type="submit">LOG IN</button>
                    <p className="switchForms">Don't have an account?
                        &nbsp;
                        <span onClick={() => setShowLogin(!showLogin)} className="switchLink">Sign Up</span>
                    </p>
                    <p className="error-message">{error}</p>
                </form>
            </div>
        </div>
    );
}
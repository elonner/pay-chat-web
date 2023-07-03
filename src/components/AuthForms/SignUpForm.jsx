import { signUp } from '../../utilities/users-service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForms.css';

export default function SignUpForm({setUser, showLogin, setShowLogin }) {
    const [credentials, setCredentials] = useState({
        first: '',
        last: '',
        username: '',
        password: '',
        confirm: '',
        imgUrl: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError('');
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { first, last, username, password, imgUrl } = credentials;
            const formData = { first, last, username, password, imgUrl };
            // The promise returned by the signUp service
            // method will resolve to the user object included
            // in the payload of the JSON Web Token (JWT)
            const user = await signUp(formData);
            setUser(user);
            navigate('/chat')
        } catch {
            // An error occurred
            // Probably due to a duplicate username
            setError('Sign Up Failand ed - Try Again');
        }
    };

    const disable = credentials.password !== credentials.confirm || credentials.password === '';
    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit} className="form login">
                    <label>First Name: 
                        &nbsp;
                        <input type="text" name="first" value={credentials.first} onChange={handleChange} required />
                    </label>
                    <label>Last Name:
                        &nbsp;
                        <input type="text" name="last" value={credentials.last} onChange={handleChange} required />
                    </label>
                    <label>Username:
                        &nbsp;
                        <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                    </label>
                    <label>Password:
                        &nbsp;
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    </label>
                    <label>Confirm:
                        &nbsp;
                        <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
                    </label>
                    <label>Avatar URL:
                        &nbsp;
                        <input type="text" name="imgUrl" value={credentials.imgUrl} onChange={handleChange} required />
                    </label>
                    <button type="submit" disabled={disable} className={disable ? 'disabled' : ''}>SIGN UP</button>
                    <p className="switchForms">Already have an account?
                        &nbsp;
                        <span onClick={() => setShowLogin(!showLogin)} className="switchLink">Log In</span>
                    </p>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}
import { signUp } from '../../utilities/users-service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({setUser}) {
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
            setError('Sign Up Failed - Try Again');
        }
    };

    const disable = credentials.password !== credentials.confirm;
    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input type="text" name="first" value={credentials.first} onChange={handleChange} required />
                    <label>Last Name</label>
                    <input type="text" name="last" value={credentials.last} onChange={handleChange} required />
                    <label>Username</label>
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
                    <label>Avatar URL</label>
                    <input type="text" name="imgUrl" value={credentials.imgUrl} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}
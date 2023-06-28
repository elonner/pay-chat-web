import { useState } from 'react';
//import './AuthPage.css';
import LoginForm from '../components/AuthForms/LoginForm';
import SignUpForm from '../components/AuthForms/SignUpForm';

export default function AuthPage({ setUser, setCurrProf }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? 
        <LoginForm setUser={setUser} setCurrProf={setCurrProf} /> 
      : <SignUpForm setUser={setUser} setCurrProf={setCurrProf} />}
    </main>
  );
}
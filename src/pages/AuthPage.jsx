import { useState } from 'react';
//import './AuthPage.css';
import LoginForm from '../components/AuthForms/LoginForm';
import SignUpForm from '../components/AuthForms/SignUpForm';

export default function AuthPage({ setUser, setCurrProf }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {showLogin ? 
        <LoginForm 
          setUser={setUser} 
          setCurrProf={setCurrProf}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        /> 
      : <SignUpForm 
          setUser={setUser} 
          setCurrProf={setCurrProf}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />}
    </main>
  );
}
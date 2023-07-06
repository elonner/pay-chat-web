import socketIO from 'socket.io-client';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';
import { getUser } from './utilities/users-service';
import { getOne } from './utilities/users-api';

const socket = socketIO.connect(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_URL : 'http://localhost:4000');

export default function App() {
  const [user, setUser] = useState(getUser());
  const [currProf, setCurrProf] = useState(null)


  useEffect(() => {
    if (user) {
      async function getCurrProf() {
        const user = getUser();
        const loggedInProf = await getOne(user._id);
        setCurrProf(loggedInProf);
      }
      getCurrProf();
    }
  }, [user]);

  return (
    <main className="App">
      {user ?
        <Routes>
          <Route path="/chat" element={<ChatPage socket={socket} currProf={currProf} />} />
          <Route path="/*" element={<ChatPage socket={socket} currProf={currProf} />} />
        </Routes>
        :
        <AuthPage setUser={setUser} socket={socket} />
      }
    </main>
  );
}
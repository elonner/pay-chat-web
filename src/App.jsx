import socketIO from 'socket.io-client';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';
import { getUser } from './utilities/users-service';

// eslint-disable-next-line
const socket = socketIO.connect('http://localhost:4000');

export default function App() {
  const [user, setUser] = useState(getUser()); 
   
  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/chat" element={<ChatPage socket={socket} />} />
          <Route path="/*" element={<ChatPage socket={socket} />} />
        </Routes>
        :
        <AuthPage setUser={setUser} socket={socket} />
      }
    </main>
  );
}
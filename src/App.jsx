import './App.css';
import socketIO from 'socket.io-client';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

// eslint-disable-next-line
const socket = socketIO.connect('http://localhost:4000');

export default function App() {
  const [username, setUsername] = useState('');

  function logIn(username) {
    setUsername(username);
  }
   
  return (
    <main className="App">
      { username === '' ?
        <HomePage logIn={logIn} socket={socket} />
        :
        <Routes>
          <Route path="/chat" element={<ChatPage socket={socket} />} />
        </Routes>
      }
    </main>
  );
}
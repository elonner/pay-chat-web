import './pages/ChatPage.css';
import socketIO from 'socket.io-client';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

// eslint-disable-next-line
const socket = socketIO.connect('http://localhost:4000');

export default function App() {
  const [username, setUsername] = useState('');
   
  return (
    <main className="App">
      { username === '' ?
        <HomePage setUsername={setUsername} socket={socket} />
        :
        <Routes>
          <Route path="/chat" element={<ChatPage socket={socket} />} />
          <Route path="/*" element={<ChatPage socket={socket} />} />
        </Routes>
      }
    </main>
  );
}
import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const socket = io.connect("http://localhost:3000");

  const sendMessage = () => {
    // Emit "message" event with the message content
    socket.emit("message", message);
  }

  return (
    <div className="App">
      <input placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></input>
      <button onClick={sendMessage}>Send Message</button>
    </div>
 
 );
}

export default App;

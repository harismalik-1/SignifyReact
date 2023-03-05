import React from 'react';
import './Chatbot.css';
//import profilePic from './profile.png'

function Chatbot() {
  const chats = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    { id: 4, name: 'Alice Johnson' },
  ];

  return (
    <div className="messaging-screen">
      <div className="chat-list">
        <h3 className='justify-center align-items-center'>Chats</h3> <hr />
        <ul>
          {chats.map(chat => (
            <li key={chat.id}>
              <a href="#">{chat.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="message-container">
        <div className="message-list">
          <div className="message message-left">
            <p>Hello!</p>
          </div>
          <div className="message message-right">
            <p>Hi there!</p>
          </div>
          <div className="message message-left">
            <p>How are you?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;

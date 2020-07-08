import React, { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  //   const api = "https://abcelen-chat-server.herokuapp.com/messages/${id}";
  const handleDelete = (id) => {
    fetch(`https://abcelen-chat-server.herokuapp.com/messages/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  };
  useEffect(() => {
    fetch("https://abcelen-chat-server.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <p>{message.from}</p>
          <p>{message.text}</p>
          <p>{message.timeStamp}</p>
          <button onClick={() => handleDelete(message.id)}> Delete </button>
        </div>
      ))}
    </div>
  );
};
export default Chat;

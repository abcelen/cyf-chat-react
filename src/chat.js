import React, { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const api = "https://abcelen-chat-server.herokuapp.com/messages";

  // const api = "http://localhost:5000/messages";

  const handleDelete = (id) => {
    fetch(`${api}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  };
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);
  return (
    <div className="message-card">
      {messages.map((message, index) => (
        <div className="message-container" key={index}>
          <div>
            {" "}
            <p>From: {message.from}</p>
          </div>
          <div className="p-message">
            {" "}
            <p className="message">{message.text}</p>
          </div>

          <div>
            {" "}
            <p>Sent: {message.timeStamp}</p>
          </div>
          <div>
            {" "}
            <button
              className="btn btn-secondary"
              onClick={() => handleDelete(message.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Chat;

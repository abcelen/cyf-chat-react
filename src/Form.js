import React, { useState } from "react";

export default function Form() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const api = "https://abcelen-chat-server.herokuapp.com/messages";
  // const api = "http://localhost:5000/messages";
  const handleAdd = () => {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        from: name,
        text: message,

      }),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Message Added");
      });
  };

  return (
    <div className="message-card">
      <h2>Send a Message</h2>
      <form className="col-md-4" onSubmit={handleAdd()}>
        <div>
          Name:{" "}
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="from"
            placeholder="Your Name"
          />{" "}
          <br />
          Message:{" "}
          <div className="message-text">
            <input
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="message"
              placeholder="Type your message"
            />
          </div>
          <br />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

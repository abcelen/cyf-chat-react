import React from "react";

export default function Form() {
  const api = "https://abcelen-chat-server.herokuapp.com/messages";
  const handleAdd = () => {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        from: document.querySelector(".input-name").value,
        text: document.querySelector(".input-message").value,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Message Added");
      });
  };

  return (
    <div className="App">
      <header className=""></header>
      <h1>Send a Message</h1>
      <form>
        <p>
          Name:{" "}
          <input
            className="input-name"
            type="text"
            name="from"
            placeholder="Your Name"
          />{" "}
          <br />
          Message:{" "}
          <input
            className="input-message"
            type="text"
            placeholder="The message..."
          />
          <br />
        </p>
        <button onClick={() => handleAdd()} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

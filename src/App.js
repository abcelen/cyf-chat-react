import React from "react";
import Chat from "./chat";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div>    <header className="App-header">Chat App</header>

    <div className="App">
      <Form />
      <Chat />
    </div>
    </div>
  );
}

export default App;

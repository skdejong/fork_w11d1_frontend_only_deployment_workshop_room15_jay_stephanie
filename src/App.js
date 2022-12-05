import React from "react";
import './App.css';
import Joke from "../src/components/joke";

function App() {
  return (
    <div className="App">
      <p>
      Hello World! This is my test-app.
      </p>
      <div>
        <Joke />
      </div>
    </div>
  );
}

export default App;

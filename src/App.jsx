import "./App.css";
import { useState } from "react";

function App() {
  const [greetingText, setGreetingText] = useState("Greeting Message");
  const [greetingInput, setGreetingInput] = useState("");
  console.log(greetingInput);
  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greetingInput}
          onChange={(event) => {
            setGreetingInput(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingText(greetingInput);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;

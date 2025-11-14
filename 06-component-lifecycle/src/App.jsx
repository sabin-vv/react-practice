import { useState } from "react";
import { Counter } from "./Counter";
import "./App.css";
function App() {
  const [state, setState] = useState(false);
  return (
    <>
      <button onClick={() => setState(!state)}>
        {state ? "Hide" : "Show "}Counter
      </button>
      {state ? <Counter /> : <></>}
    </>
  );
}

export default App;

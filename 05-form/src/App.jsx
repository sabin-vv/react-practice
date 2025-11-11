import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [name, setname] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setname(inputRef.current.value);
  };
  return (
    <form onSubmit={submitHandle}>
      <label>Enter your name</label>
      <input ref={inputRef} type="text" />
      {name?.length ? <span>{name}</span> : <></>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

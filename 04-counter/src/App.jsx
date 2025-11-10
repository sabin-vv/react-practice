import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${value}`)
      .then((response) => {
        if (!response.ok) {
          setData(null);
          return;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [value]);

  return (
    <div className="container">
      <h1 className="count">{value}</h1>
      <div className="userData">
        {data ? <span>{data.name}</span> : <span>No data Found</span>}
        {data ? <span>{data.email}</span> : <></>}
      </div>
      <div className="button-wrap">
        <button onClick={() => setValue((val) => val - 1)}>-</button>
        <button onClick={() => setValue((val) => val + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;

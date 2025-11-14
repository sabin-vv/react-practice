import { useEffect, useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, [count]);
  return (
    <div>
      <h2>Counter : {count} </h2>
      <button onClick={() => setCount(count + 1)}>update</button>
    </div>
  );
};

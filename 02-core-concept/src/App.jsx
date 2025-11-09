import { Button } from "./Button";
import "./App.css";

function Heading() {
  return <h2>By sabin !</h2>;
}

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Heading />
      <Button />
    </div>
  );
}

export default App;

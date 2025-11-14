/*
Create a component that displays your name using props.

Make a <UserCard> component and pass name, age, and location as props.

Build a <Greeting> component that shows different messages based on the time of day
*/

import { Display } from "./Components/Display";
import { Greeting } from "./Components/Greeting";
import { UserCard } from "./Components/UserCard";

function App() {
  const details = {
    name: "sabin",
    age: 30,
    location: "Kannur",
  };
  return (
    <>
      <Display name={details.name} />
      <Greeting />
      <UserCard data={details} />
    </>
  );
}

export default App;

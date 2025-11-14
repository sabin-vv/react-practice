export const Greeting = () => {
  const hour = new Date().getHours();
  let time = "";
  if (hour >= 0 && hour < 12) {
    time = "Morning";
  } else if (hour >= 12 && hour < 17) {
    time = "AfterNoon";
  } else if (hour >= 17 && hour < 24) {
    time = "Evening";
  } else {
    time = "Night";
  }

  return <h2>Good {time}!</h2>;
};

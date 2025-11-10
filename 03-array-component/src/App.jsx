import "./App.css";

function App() {
  const data = [
    { id: 1, name: "Lanne Graham", email: "lannegraham@abc.com" },
    { id: 2, name: "Ervin Howell", email: "ervinhowell@abc.com" },
  ];

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div key={item.id} className="profile__card">
            <h1>{item.name}</h1>
            <p>Email:{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

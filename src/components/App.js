import List from "./List";
import Search from "./Search";


function App() {
  const title = "React";
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />

    </div>
  );
}

export default App;

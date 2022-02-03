import {useState} from "react";
import List from "./List";
import Search from "./Search";


function App() {
  
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <hr />

      <List searchTerm={searchTerm}/>

    </div>
  );
}

export default App;


/*13-01-2022 0:14:00*/

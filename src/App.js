import { useState } from "react";
import NameList from "./NameList";

const App = (props) => {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNames((prevState) => [...prevState, name]);
    setName("");
  };

  const handleDelete = (_name) => {
    setNames((prevState) => prevState.filter((name) => name !== _name));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Enter a name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <NameList names={names} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

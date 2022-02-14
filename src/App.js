import { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "./store/namesSlice";
import NameList from "./NameList";

const App = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addName(name))  
    setName("");
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
      <NameList />
    </div>
  );
};

export default App;

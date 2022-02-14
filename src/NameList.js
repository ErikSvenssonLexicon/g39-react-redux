import { useDispatch, useSelector } from "react-redux";
import { removeName } from "./store/namesSlice";

const NameList = () => {
  const dispatch = useDispatch();
  const names = useSelector(state => state.namesSlice)

  const listItems = names.map((name) => (
    <li
      onClick={() => dispatch(removeName(name))}
      key={Math.floor(Math.random() * 1000)}
    >
      {name}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export default NameList;

const NameList = (props) => {
  const listItems = props.names.map((name) => (
    <li
      onClick={() => props.handleDelete(name)}
      id={Math.floor(Math.random() * 1000)}
    >
      {name}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export default NameList;

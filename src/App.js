import { useState, memo, useMemo, useCallback } from "react";

function ListItem({ text }) {
  return <li>{text}</li>;
}
const List = memo(({ listConfig, onNumberChange }) => {
  const items = [];
  for (let i = 0; i <= listConfig.numOfItems; i++) {
    items.push(<ListItem text={i} />);
  }
  return <ul onClick={onNumberChange}>{items}</ul>;
});

function App() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const listConfig = useMemo(() => {
    return {
      numOfItems: 200,
      name,
    };
  }, [name]);

  const callback = useCallback(() => alert(name), [name]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <List listConfig={listConfig} onNumberChange={callback} />
    </>
  );
}

export default App;

import { useState, memo, useMemo } from "react";

function ListItem({ text }) {
  return <li>{text}</li>;
}
const List = memo(({ listConfig }) => {
  const items = [];
  for (let i = 0; i <= listConfig.numOfItems; i++) {
    items.push(<ListItem text={i} />);
  }
  return <ul>{items}</ul>;
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
      <List listConfig={listConfig} />
    </>
  );
}

export default App;

import { useState, memo } from "react";

function ListItem({ text }) {
  return <li>{text}</li>;
}
const List = memo(({ numOfItems }) => {
  const items = [];
  for (let i = 0; i <= numOfItems; i++) {
    items.push(<ListItem text={i} />);
  }
  return <ul>{items}</ul>;
});

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <List numOfItems={200} />
    </>
  );
}

export default App;

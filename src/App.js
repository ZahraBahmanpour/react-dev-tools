import { useState } from "react";

function ListItem({ text }) {
  return <li>{text}</li>;
}
function List({ numOfItems }) {
  const items = [];
  for (let i = 0; i <= numOfItems; i++) {
    items.push(<ListItem text={i} />);
  }
  return <ul>{items}</ul>;
}

function Input() {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
function App() {
  return (
    <>
      <Input />
      <List numOfItems={200} />
    </>
  );
}

export default App;

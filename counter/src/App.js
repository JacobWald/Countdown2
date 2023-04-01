// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Counter Demo App</h1>
      <Counter name="Button 1" />
      <Counter name="Button 2" />
      <Counter name="Button 3" />
    </div>
  );
}

// OR
// function App() {
//   const buttons = [1, 2, 3, 4, "Bob"];
//   return (
//     <div className="App">
//       <h1>Counter Demo App</h1>
//       {buttons.map((element, index) => (
//         <Counter name={"Button" + element} key={"button" + index} />
//       ))}
//     </div>
//   );
// }

function Counter({ name = "No Name Button" }) {
  const [value, setValue] = useState(0);
  return (
    <>
      <h2>{name}</h2>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </>
  );
}

export default App;

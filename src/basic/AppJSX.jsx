import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "제이";
  const list = ["dog", "cat", "bird"];
  return (
    <>
      <h1 className="orange">{`HELLO! ${name}`}</h1>
      <h1>안녕!</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <img src="https://images.unsplash.com/photo-1666133619062-8c3621ba7322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
    </>
  );
}

export default AppJSX;

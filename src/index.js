import React from "react";
import ReactDOM from "react-dom";
import Counter from "./app.js";
import "./styles.css";

function Header() {
  return (
    <React.Fragment>
      <h1>Welcome to the Counter</h1>
      <p>Press the button below to see what happens</p>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

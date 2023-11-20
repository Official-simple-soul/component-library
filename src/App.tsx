import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";

function App() {
  return (
    <div className='App'>
      <Button label='My Button' onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;

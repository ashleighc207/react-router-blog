import React from "react";
import "./App.css";
import Nav from "./Components/Nav.js";
import BlogList from "./Components/BlogList.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <BlogList />
    </div>
  );
}

export default App;

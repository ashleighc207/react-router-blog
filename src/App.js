import React from "react";
import "./App.css";
import Nav from "./Components/Nav.js";
import BlogList from "./Components/BlogList.js";
import BlogContent from "./Components/BlogContent.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/blog/:id" component={BlogContent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

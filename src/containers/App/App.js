import React from "react";
import "./App.css";
import { Nav, BlogList, BlogContent } from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
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

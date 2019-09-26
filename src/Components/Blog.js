import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Blog.css";
import BlogContent from "./BlogContent.js";
import BlogList from "./BlogList.js";
import blogs from "../Models/blogs.js";

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h3>{this.props.heading}</h3>
        <div>
          <p>By: {this.props.author}</p>
          <p>{this.props.date}</p>
        </div>
        <div>
          <p>{this.props.content}</p>
        </div>
        <div>
          <Link to={`/blog/${this.props.id}`}>
            Read More <i className="material-icons">keyboard_arrow_right</i>
          </Link>
        </div>
      </section>
    );
  }
}

export default Blog;

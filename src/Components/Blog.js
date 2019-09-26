import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <section>
        <h3>{this.props.heading}</h3>
        <div>
          <p>By: {this.props.author}</p>
          <date>{this.props.date}</date>
        </div>
        <div>
          <p>{this.props.content}</p>
        </div>
        <div>
          <Link to="">
            Read More <i class="material-icons">keyboard_arrow_right</i>
          </Link>
        </div>
      </section>
    );
  }
}

export default Blog;

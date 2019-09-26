import React, { Component } from "react";
import "./BlogList.css";
import Blog from "./Blog.js";
import blogs from "../Models/blogs.js";

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: blogs
    };
  }
  render() {
    return (
      <main className="BlogList">
        <h1 className="BlogList--heading"> Recent Items </h1>
        {this.state.blogs.map(b => {
          return (
            <Blog
              heading={b.heading}
              content={b.body}
              author={b.author}
              date={b.date}
            />
          );
        })}
      </main>
    );
  }
}

export default BlogList;

import React, { Component } from "react";
import "./BlogList.css";
import Blog from "./Blog.js";
import blogs from "../../utils/seedData";

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
        <h1 className="BlogList--heading"> Recent Blogs </h1>
        {this.state.blogs.map(b => {
          return (
            <Blog
              heading={b.heading}
              content={b.body}
              author={b.author}
              date={b.date}
              id={b.id}
              key={b.id}
            />
          );
        })}
      </main>
    );
  }
}

export default BlogList;

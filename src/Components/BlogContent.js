import React, { Component } from "react";
import blogs from "../Models/blogs.js";
import { Link } from "react-router-dom";

class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: []
    };
    this.getBlog = this.getBlog.bind(this);
  }
  getBlog(id) {
    let blog = blogs.filter(b => b.id === id);
    return blog;
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    let data = this.getBlog(this.props.match.params.id);
    this.setState({ blog: data[0] });
  }
  render() {
    return (
      <section>
        <h3>{this.state.blog.heading}</h3>
        <div>
          <p>By: {this.state.blog.author}</p>
          <p>{this.state.blog.date}</p>
        </div>
        <div>
          <p>{this.state.blog.body}</p>
        </div>
        <div>
          <Link to="/">
            <i className="material-icons">keyboard_arrow_left</i> Go Back
          </Link>
        </div>
      </section>
    );
  }
}

export default BlogContent;

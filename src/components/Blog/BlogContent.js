import React, { Component } from "react";
import blogs from "../../utils/seedData";
import { Link } from "react-router-dom";
import "./BlogContent.css";

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
    let data = this.getBlog(this.props.match.params.id);
    this.setState({ blog: data[0] });
  }
  render() {
    return (
      <section className="BlogContent">
        <h3 className="BlogContent--heading">{this.state.blog.heading}</h3>
        <div className="BlogContent--byline">
          <p className="BlogContent--byline_author">
            By: {this.state.blog.author}
          </p>
          <p className="BlogContent--byline_date">{this.state.blog.date}</p>
        </div>
        <div className="BlogContent--content">
          <p className="BlogContent--content_text">{this.state.blog.body}</p>
        </div>
        <div className="BlogContent--go_back">
          <Link to="/" className="BlogContent--go_back_link">
            <i className="material-icons BlogContent--go_back_icon">
              keyboard_arrow_left
            </i>
            Go Back
          </Link>
        </div>
      </section>
    );
  }
}

export default BlogContent;

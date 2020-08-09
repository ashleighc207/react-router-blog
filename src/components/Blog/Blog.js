import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Blog.css";
import BlogContent from "./BlogContent.js";
import BlogList from "./BlogList.js";
import blogs from "../../utils/seedData";

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="Blog">
        <h3 className="Blog--heading">{this.props.heading}</h3>
        <div className="Blog--byline">
          <p className="Blog--byline_author">By: {this.props.author}</p>
          <p className="Blog--byline_date">{this.props.date}</p>
        </div>
        <div className="Blog--content">
          <p className="Blog--content_text">
            {this.props.content.substring(0, 240) + "..."}
          </p>
        </div>
        <div className="Blog--read_more">
          <Link to={`/blog/${this.props.id}`} className="Blog--read_more_link">
            Read More
            <i className="material-icons Blog--read_more_icon">
              keyboard_arrow_right
            </i>
          </Link>
        </div>
      </section>
    );
  }
}

export default Blog;

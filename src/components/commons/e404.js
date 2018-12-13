// Modules
import React, { Component } from "react";
import { Link } from 'react-router';

class E404 extends Component {
  render() {
    return (
      <section className="home">
        <h1 className="title">E404</h1>
        <span>Page not found. You can <Link to="/"><span>go back</span></Link> to the previous page, or <Link to="/home"><span>return home</span></Link>.</span>
      </section>
    );
  }
}

export default E404;

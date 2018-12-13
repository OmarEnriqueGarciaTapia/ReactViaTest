// Modules
import React, { Component } from "react";
import { Link } from 'react-router';

// Components
import SearchBar from "../../search/search_bar"

// Media
import logo from "../../../logo.svg"

class Logo extends Component {
  render() {
    return (
      <section className="logo">
        <Link to="/home">
         <img src={logo} alt="logo" />
        </Link>
      </section>
    );
  }
}

class Icons extends Component {
  render() {
    return (
      <section className="icons">
        <i className="fas fa-bell"><span>9+</span></i>
        <i className="fas fa-envelope"><span>07</span></i>
        <i className="fas fa-user-circle"></i>
      </section>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <section className="header">
        <Logo />
        <Icons />
        <SearchBar jobs={this.props.jobs} autocompleteJobs={ this.props.autocompleteJobs }/>
        <hr className="fix-height"></hr>
      </section>
    );
  }
}

export default Header;

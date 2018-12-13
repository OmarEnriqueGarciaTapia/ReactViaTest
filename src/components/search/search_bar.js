// Modules
import React, { Component } from "react";
import _ from "lodash";


// Helpers
import commons from "../../helpers/commons";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: "",
      searchBarActive: "",
      listActive: ""
    };
  }

  handlerOnClickSearch(e, keywords) {
    e.preventDefault();
    if (this.state.keywords.length >= 3) {
      commons.goToSearch(keywords);
      this.setState({
        keywords: "",
        searchBarActive: "",
        listActive: ""
      });
    }
  }

  handlerOnChange(e) {
    e.preventDefault();
    const keywords = e.currentTarget.value
    this.setState({ keywords: keywords });
    if (this.state.keywords.length >= 2) {
      this.props.autocompleteJobs( keywords );
    }
  }

  handlerOnKeyPress(e) {
    if (e.charCode === 13 && this.state.keywords.length >= 3) {
      e.preventDefault();
      commons.goToSearch({ keywords: this.state.keywords });
      this.setState({
        keywords: "",
        searchBarActive: "",
        listActive: ""
      });
    }
  }

  handlerOnFocus(e) {
    this.setState({ keywords: "" });
    this.setState({
      searchBarActive: "search-bar-active",
      listActive: "hide"
    });
  }

  handlerOnBlur(e) {
    if (this.state.keywords.length === 0) {
      this.setState({
        searchBarActive: ""
      });
    }
  }

  handlerOnClickLi(e, job) {
    e.preventDefault();
    commons.goToJob(job);
    this.setState({
      keywords: "",
      searchBarActive: "",
      listActive: ""
    });
  }

  render() {

    /* Others */
    const self = this;

    /* Data */
    const keywords = this.state.keywords;
    const searchBarActive = this.state.searchBarActive;
    const jobs = this.props.jobs;
    const nJobs = jobs.length > 6 ? jobs.slice(0, 6) : jobs;
    const listActive = (jobs.length > 0 && keywords !== "" && keywords.length >= 3 ) ? "" : "hide" ;

    
    /* Maps */
   
    const jobRows = _.map(nJobs, function(job, i) {
      return <li key={i} onClick={(e) => self.handlerOnClickLi(e, { name: job.suggestion, uuid:job.uuid })} > {job.suggestion} </li>;
    });

    return (
      <section className="search-bar">
        <input
          className={searchBarActive}
          onChange={e => this.handlerOnChange(e)}
          onKeyPress={e => this.handlerOnKeyPress(e)}
          onFocus={e => this.handlerOnFocus(e)}
          onBlur={e => this.handlerOnBlur(e)}
          value={keywords}
          type="text"
          placeholder="Search For..."
          name="search"
        />
        <button
          onClick={e => this.handlerOnClickSearch(e, { keywords: keywords })}
          type="submit"
        >
          <i className="fa fa-search" />
        </button>
        <ul className={ listActive }>
          { jobRows }
        </ul>
      </section>
    );
  }
}

export default SearchBar;

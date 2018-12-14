// Modules
import React, { Component } from "react";
import commons from "../../helpers/commons";
import _ from "lodash";

class Search extends Component {

  handlerOnClickLi(e, job) {
    e.preventDefault();
      commons.goToJob(job);
  }

  render() {
    
    /* Others */
    const self = this;
    const pathname = this.props.location.pathname;
    const jobSearchKey = commons.getJobName( pathname )

    const jobs = this.props.jobs;
    const nJobs = jobs.length > 40 ? jobs.slice(0, 39) : jobs;

    /* Maps */
    const jobRows = _.map(nJobs, function(job, i) {

      return <li key={i} title={ job.suggestion } onClick={(e) => self.handlerOnClickLi(e, { name: job.suggestion, uuid:job.uuid })} > { job.suggestion.length >= 32 ? job.suggestion.slice(0,31) + "..." : job.suggestion} </li>;
    });


    return (
      <section className="search">
        <h1 className="title">Search: { jobSearchKey }</h1>
        <ul>
          { jobRows }
        </ul>
      </section>
    );
  }
}

export default Search;

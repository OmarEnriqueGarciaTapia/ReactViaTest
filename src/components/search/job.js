// Modules
import React, { Component } from "react";
import commons from "../../helpers/commons";

class Job extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobId: commons.getJobId( this.props.location.pathname )
    };
  }

  componentDidMount(){
    const jobId = this.state.jobId;
    this.props.getJob( jobId )
  }

  render() {

    /* Others */

    const job = this.props.job;
    console.log("job: ", job)

    return (
      <section className="job">
      <h1 className="title">Job description:</h1>
      <div>
        <span className=""><b>Normalized job title:</b> { job.normalized_job_title }</span>
        <span className=""><b>Parent uuid:</b> { job.parent_uuid }</span>
        <span className=""><b>Title:</b> { job.title }</span>
        <span className=""><b>Uuid:</b> { job.uuid }</span>
      </div>
      </section>
    );
  }
}

export default Job;

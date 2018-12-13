// Modules
import React, { Component } from "react";
import {connect} from "react-redux";

// Actions
import * as actionCreators from "../../../store/actions";

// Components
import Header from "./header";

class App extends Component {

  render() {

    /* Layout data 'store'*/
    const jobs = this.props.jobs;
    const job = this.props.job;
    const autocompleteJobs = this.props.autocompleteJobs;
    const getJob = this.props.getJob;
    return (
      <div className="App" >
        <Header jobs={ jobs } autocompleteJobs={autocompleteJobs}/>
        <div id="initial" className="content">
          {React.cloneElement(this.props.children, {
            jobs: jobs,
            job: job,
            getJob: getJob
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return state
};

export default connect (mapStateToProps, actionCreators)(App);

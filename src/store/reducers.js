let defaultState = {
  jobs: [],
  job:{}
};

const mainReducer = (state = defaultState, action) => {
  /* GET JOBS BY AUTOCOMPLETE */
  if (action.type === "GET_JOBS_BY_AUTOCOMPLETE") {
    return {
      ...state,
      jobs: action.jobs
    };
  }
  else if(action.type === "GET_JOB_BY_ID") {
    return {
      ...state,
      job: action.job
    };
  }
  else {
    return {
      ...state
    };
  }
};

export default mainReducer;

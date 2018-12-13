/* Modules */
import axios from "axios";

/* Endpoints */
import endpoints from "../config/endpoints";

/* Axios headers */
let axiosOptions = {
      crossdomain: true
	}

/* Autocomplete Jobs */
export function autocompleteJobs( keywords ){
    return(dispatch)=>{
        const url = endpoints.autocomplete + "?begins_with=" + keywords;
        return axios.get(url, axiosOptions).then((response)=>{
            dispatch(getJobsByAutocomplete(response.data));
        })
    }
}
export function getJobsByAutocomplete(jobs){
    return{
        type:"GET_JOBS_BY_AUTOCOMPLETE",
        jobs:jobs
    }
}

/* Get Job */
export function getJob( id ){
    return(dispatch)=>{
        const url = endpoints.job + "/" + id;
        return axios.get(url, axiosOptions).then((response)=>{
            dispatch(getJobById(response.data));
        })
    }
}
export function getJobById(job){
    return{
        type:"GET_JOB_BY_ID",
        job:job
    }
}
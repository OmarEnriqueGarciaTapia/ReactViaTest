// Properties
import properties from "./properties";

const baseUrl = properties.api_services.base_url;

// Endpoints
export default {
  autocomplete: baseUrl + 'jobs/autocomplete',
  job: baseUrl + 'jobs',
};
  
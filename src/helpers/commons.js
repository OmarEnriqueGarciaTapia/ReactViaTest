// Modules
import { browserHistory } from 'react-router';

// Commons
export default {
  goToSearch( search ) {
    const pathname = '/search/' + search.keywords;
    browserHistory.push({ pathname: pathname, state: { data: search }});
  },
  goToJob( job ) {
    const pathname = '/job/' + job.name + "/" + job.uuid;
    browserHistory.push({ pathname: pathname, state: { data: job }});
  },
  getUrlPaths( pathname ){
    const paths = pathname ? pathname.replace(new RegExp(/%20/g)," ").split("/") : [];
    return paths;
  },
  getJobName( pathname ){
    var name = "";
    const paths = this.getUrlPaths( pathname );
    name = paths[(paths.length - 1)];
    return name;
  },
  getJobId( pathname ){
    var name = "";
    const paths = this.getUrlPaths( pathname );
    name = paths[(paths.length - 1)];
    return name;
  }
};

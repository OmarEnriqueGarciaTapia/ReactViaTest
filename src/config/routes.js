import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

// Layouts
import DefaultLayout from '../components/layouts/default/layout';

// Commons
import Home from '../components/commons/home';
import E404 from '../components/commons/e404';

// Search
import Search from '../components/search/search';
import Job from '../components/search/job';


const Routes = () => (
    <Router history={ browserHistory }>
      <Route path='/' component={ DefaultLayout }>
        <IndexRoute component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/search/*" component={ Search } />
        <Route path="/job/*" component={ Job } />
        <Route path="/e404" component={ E404 } />
      </Route>
      <Route path='*' component={ DefaultLayout }>
        <IndexRoute component={ E404 } />
      </Route>
    </Router>
  );
  
  export default Routes
  
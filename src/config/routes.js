import React from 'react';
import { Router, Route } from 'react-router';
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;
import Main from '../components/Main';
import HomeContainer from '../containers/HomeContainer';
import RecentContainer from '../containers/RecentContainer';


var routes = (
	<Router history={hashHistory}>
	  <Route path='/' component={Main}>
	    <IndexRoute component={HomeContainer} />
	    <Route path='recent' component={RecentContainer} />
	  </Route>
	</Router>
);

export default routes;
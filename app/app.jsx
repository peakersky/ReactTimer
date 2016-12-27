var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

// We do not need to assign variables to require css components, because they will not be used in the render method.
// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
// Compile the app.scss into css with loaders, and load them on the app.jsx
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="countdown" component={Countdown}/>
        <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

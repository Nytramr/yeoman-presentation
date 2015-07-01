/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = React.createFactory(Router.RouteHandler);

var App = module.exports = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h1>Welcome ReactJS</h1>
        {/*<RouteHandler />*/}
      </div>
    );
  }
});

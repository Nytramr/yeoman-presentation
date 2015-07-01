var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var Constants = require('constants');

var AppDispatcher = assign(new Dispatcher(), {
  
  handleViewAction: function(action){
    this.dispatch({
      source: Constants.source.VIEW_ACTION,
      action: action
    })
  }
});

module.exports = AppDispatcher;

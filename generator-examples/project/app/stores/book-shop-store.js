'use strict';

var React = require('react');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var Dispatcher = require('dispatcher');
var Constants = require('constants');

var actionHandler = require('stores/action-handler');

var CHANGE_EVENT = "change";

/*
  Add action handlers here
  ------------------------
  Example:
*/
/*

function _doSomething (action) {
  //Do your magic here
  //You can call the server, store data or whatever
}

actionHandler.setActionHandler('VIEW', Constants.ADD_COMMENT, _addComment);
*/

var BookShopStore = merge(EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  
  /*
    Add your getters here
  */

  dispatcherIndex: Dispatcher.register(function (payload) {
    actionHandler.handleAction(payload);
    BookShopStore.emitChange();
    return true;
  })
  
});

module.exports = BookShopStore;
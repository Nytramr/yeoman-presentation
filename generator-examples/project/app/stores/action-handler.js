var actionHandlers = {};

function getActionHandler (payload) {
  
  return (actionHandlers[''] || []).concat(actionHandlers[payload.source] || [],
                                           actionHandlers[payload.action.actionType] || [],
                                           actionHandlers[payload.source + '|' + payload.action.actionType] || []);
}

module.exports.setActionHandler = function () {
  var args = Array.prototype.slice.call(arguments)
    , cb = args.pop()
    , key = args.join('|');
  
  if (typeof cb === 'function'){
    var handlers = actionHandlers[key] || (actionHandlers[key] = []);
    if (handlers.indexOf(cb) == -1 ) {
      handlers.push(cb);
    }
  } else {
    console.warn("The last argumant must be a function");
  }
};

module.exports.handleAction = function (payload) {
  var handlers = getActionHandler(payload);
  var i;
  
  for (i = handlers.length - 1; i >= 0; i--) {
    handlers[i](payload.action);
  }
};
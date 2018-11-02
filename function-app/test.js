// This is my Azure Functions wrapper and tester

/**
 * Development: Local environment override.
 */
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

// just replace this with your function file
var myFunction = require('./index.js');

var req = {};

var context = {
  log: console.log,
  res: {},
  done: function () { console.log(JSON.stringify(this.res)) }
};

myFunction(context, req);
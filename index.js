/* eslint-disable  */
require('babel-register');
var yargs = require('yargs');
var cluster = require('cluster');
var numOfCPUs = require('os').cpus().length;
var numWorkers = 0;

if (yargs.argv.USE_MULTI_CORE && yargs.argv.USE_MULTI_CORE ==='true'){
  numWorkers = (yargs.argv.NO_OF_CHILD_PROCESS &&
                yargs.argv.NO_OF_CHILD_PROCESS < (numOfCPUs -1) ? yargs.argv.NO_OF_CHILD_PROCESS:(numOfCPUs -1) )
                || numOfCPUs -1 ;
}
if (numWorkers <= 1)      // No clustering
{
  var server = require('./src/app.js');
  module.exports = server;
} else {                 // clustering
  if(cluster.isMaster) {
    log.info('Master cluster setting up ' + numWorkers   + ' workers...');
    for(var i = 0; i < numWorkers; i++) {
      cluster.fork();
    }
    cluster.on('online', function(worker) {
      log.info('Worker ' + worker.process.pid + ' is online');
    });
    cluster.on('exit', function(worker, code, signal) {
      log.info('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
      log.info('Starting a new worker');
      cluster.fork();
    });
  } else {
    var server = require('./src/app.js');
    module.exports = server;
  }
}

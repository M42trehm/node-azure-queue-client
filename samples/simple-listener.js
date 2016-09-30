// config with your settings
var qName               = '<<YOURQUEUENAME>>';
var qStorageAccount     = '<<YOURACCOUNTNAME>>';
var qStorageSecret      = '<<YOURACCOUNTSECRET>>';
var qPolling            = 2;

var q = require('q');

// load the module
var azureQueueClient = require('../lib/azure-queue-client.js');

// generate the listener
var queueListener = new azureQueueClient.AzureQueueListener();

// establish a message handler
queueListener.onMessage(function (message) {
    var defer = q.defer();
    // log something
    if (message) {
    console.log('Message received: ' + JSON.stringify(message));
        defer.resolve(message);
    } else {
        defer.reject(error);
    }
    // done without errors
    return defer.promise;
});

// start the listening
queueListener.listen(qName, qStorageAccount, qStorageSecret, qPolling, null);

// Add the following sample message to the queue
/*
{ "messageType":"J1", "messageData": {}}
*/
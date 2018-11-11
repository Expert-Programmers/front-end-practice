const mongoose = require('mongoose');

const options = {
    autoIndex: true, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to connect
    reconnectInterval: 500, // Reconnect every 50ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    keepAlive: true,
};

// mongoose.connect('mongodb://localhost:27017/test');
// mongoose.connect('mongodb://username:password@host:port/database?options...');
mongoose.connect('mongodb://localhost:27017/test', options)
    .then(() => console.log('=======> connect success.'))
    .catch(err => console.log('=======> connect failure', err.message));

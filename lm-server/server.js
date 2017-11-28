const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const socketBackendService = require('./services/socketBackendService')(io);
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds119476.mlab.com:19476/leisure-moment', {useMongoClient: true});
const path = require('path');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
// var users = [];

app.use('/api/v1', restRouter);
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, '../public/')));
app.use(function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

// listening on port:5000
server.listen(5000, () => {
    const addr = server.address();
    console.log('server start and listening on ' + addr.port);
});
server.on('error', onError);

function onError(error) {
    throw error;
}
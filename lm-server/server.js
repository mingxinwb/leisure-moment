const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds119476.mlab.com:19476/leisure-moment', {useMongoClient: true});
const path = require('path');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
// const io = require('socket.io')(server);

// var users = [];

app.use('/api/v1', restRouter);
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, '../public/')));
app.use(function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

// listening on port:5000
server.listen(5000, () => {
    console.log('server start and listening on port:5000.');
});

// io.on('connection', (socket) => {
//     socket.on('disconnect', () => {
//         console.log(socket.nickname + ' disconnected');
//         users.splice(socket.userIndex, 1);
//         socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
//     });

//     socket.on('login', (nickname) => {
//         if (users.indexOf(nickname) > -1) {
//             socket.emit('nickExisted');
//         } else {
//             console.log(nickname + ' connected');
//             socket.userIndex = users.length;
//             socket.nickname = nickname;
//             users.push(nickname);
//             socket.emit('loginSuccess');
//             io.sockets.emit('system', nickname, users.length, 'login');
//         };
//     });

//     socket.on('postMsg', (msg, color) => {
//         socket.broadcast.emit('newMsg', socket.nickname, msg, color);
//     });

//     socket.on('img', (imgData) => {
//         socket.broadcast.emit('newImg', socket.nickname, imgData);
//     });
// });
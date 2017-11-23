const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds119476.mlab.com:19476/leisure-moment');

const restRouter = require('./routes/rest');
// const io = require('socket.io')(server);

// var users = [];

app.use('/api/v1', restRouter);

// app.use('/', express.static(__dirname + '/www/'));

// listening on port:3000
server.listen(3000, () => {
    console.log('server start and listening on port:3000.');
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
module.exports = function(io) {
    var users = [];
    io.on('connection', (socket) => {
        socket.on('login', (nickname) => {
            if (users.indexOf(nickname) > -1) {
                socket.emit('nameExisted');
            } else {
                console.log(nickname + ' connected');
                socket.userIndex = users.length;
                socket.nickname = nickname;
                users.push(nickname);
                socket.emit('loginSuccess', nickname);
            };
        });

        socket.on('chatConnect', (userNickname) => {
            io.sockets.emit('system', userNickname, socket.userIndex + 1, 'login');
        });

        socket.on('disconnect', () => {
            console.log(socket.nickname + ' disconnected');
            users.splice(socket.userIndex, 1);
            socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
        });
    });
}


//     socket.on('postMsg', (msg, color) => {
//         socket.broadcast.emit('newMsg', socket.nickname, msg, color);
//     });

//     socket.on('img', (imgData) => {
//         socket.broadcast.emit('newImg', socket.nickname, imgData);
//     });
// });
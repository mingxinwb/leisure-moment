module.exports = function(io) {
    var allUsers = [];
    io.on('connection', (socket) => {
        socket.on('login', (nickname) => {
            if (allUsers.indexOf(nickname) > -1) {
                socket.emit('nameExisted');
            } else {
                console.log(nickname + ' connected');
                socket.userIndex = allUsers.length;
                socket.nickname = nickname;
                allUsers.push(nickname);
                socket.emit('loginSuccess', nickname);
            };
        });

        socket.on('chatConnect', (userNickname) => {
            io.sockets.emit('system', userNickname, socket.userIndex + 1, 'login');
            console.log(allUsers);
            io.sockets.emit('usersList', allUsers);
        });

        socket.on('disconnect', () => {
            console.log(socket.nickname + ' disconnected');
            allUsers.splice(socket.userIndex, 1);
            socket.broadcast.emit('system', socket.nickname, allUsers.length, 'logout');
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
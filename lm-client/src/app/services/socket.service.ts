import { Injectable } from '@angular/core';

declare var io: any;

@Injectable()
export class SocketService {
  socket: any;

  constructor() { }

  init() {
    this.socket = io.connect();
    this.socket.on('connect', () => {
      console.log('client connected to server now.');
      document.getElementById('info').textContent = 'get yourself a nickname :)';
      document.getElementById('nickWrapper').style.display = 'inline-block';
      document.getElementById('nicknameInput').focus();
    });

    this.socket.on('nameExisted', () => {
      document.getElementById('info').textContent = "oops...nickname is taken, choose another pls";
    });

    this.socket.on('loginSuccess', (nickname) => {
      console.log(nickname + ' has login.');
      document.getElementById('loginWrapper').style.display = 'none';
      document.getElementById('userName').textContent = nickname;
    });
  }

  addNewName(nickname) {    
    this.socket.emit('login', nickname);   
  };

  conversation(userNickname) {
    document.getElementById('welcomeName').textContent = 'Hello ' + userNickname;
    this.socket.emit('chatConnect', userNickname);
    this.socket.on('system', (username, userCount, type) => {
      var msg = username + (type == 'login' ? ' joined' : ' left');
      // var p = document.createElement('p');
      // p.textContent = msg;
      this._displayNewMsg('system', msg, 'red');
      // document.getElementById('historyMsg').appendChild(p);
      document.getElementById('status').textContent = userCount  + (userCount > 1 ? ' users' : ' user') + ' online';
    });
  }

  _displayNewMsg(user, msg, color) {
    var container = document.getElementById('historyMsg');
    var msgToDisplay = document.createElement('p');
    var date = new Date().toTimeString().substr(0, 8);
    // var msg = Chat.prototype._showEmoji(msg);

    msgToDisplay.style.color = color || '#000';
    msgToDisplay.innerHTML = user + '<span class="timespan">(' + date + '): </span>' + msg;
    container.appendChild(msgToDisplay);
    container.scrollTop = container.scrollHeight;
  };

  // checkname() {
  //   if (document.getElementById('userName').textContent.trim().length !=0) {
  //     document.getElementById('loginWrapper').style.display = 'none';
  //   }
  // }
}
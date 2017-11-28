import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var io: any;

@Injectable()
export class SocketService {
  socket: any;
  parcitipants: string[];

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
      this._displayNewMsg('system', msg, 'red');
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

}
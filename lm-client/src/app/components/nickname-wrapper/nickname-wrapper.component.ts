import { Component, OnInit } from '@angular/core';

import { Moment } from '../../models/moment.model';
import { SocketService } from '../../services/socket.service';

const DEFAULT_MOMENT: Moment = Object.freeze({
  id: 0,
  title: '',
  nickname: '',
  content: '',
  likes: 0,
  comments: 0
});

@Component({
  selector: 'app-nickname-wrapper',
  templateUrl: './nickname-wrapper.component.html',
  styleUrls: ['./nickname-wrapper.component.css']
})
export class NicknameWrapperComponent implements OnInit {
  newMoment: Moment = Object.assign({}, DEFAULT_MOMENT);

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    // this.socketService.checkname();
  }

  addNewName(): void {
    if (this.newMoment.nickname.trim().length !=0) {
      this.socketService.addNewName(this.newMoment.nickname);
      this.newMoment = Object.assign({}, DEFAULT_MOMENT);
    } else {
      document.getElementById('nicknameInput').focus;
    };
  }

}

import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Moment } from '../../models/moment.model';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addNewName(): void {
    if (this.newMoment.nickname.trim().length !=0) {
      this.dataService.addNewName(this.newMoment.nickname);
      this.newMoment = Object.assign({}, DEFAULT_MOMENT);
    } else {
      document.getElementById('nicknameInput').focus;
    };
  }

}

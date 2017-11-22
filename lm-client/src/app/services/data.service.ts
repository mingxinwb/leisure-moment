import { Injectable } from '@angular/core';

import { mockMoments } from '../mock-moments';
import { Moment } from '../models/moment.model';

@Injectable()
export class DataService {
  moments: Moment[] = mockMoments;
  users: string[] = [];

  constructor() { }

  getMoments(): Moment[] {
    return this.moments;
  };

  getMoment(id: number): Moment {
    return this.moments.find((moment) => moment.id === id);
  };

  addNewName(newUserName) {
    if (this.users.indexOf(newUserName) > -1) {
      console.error('nickname existed');
      return document.getElementById('info').textContent = "nickname is taken, pls pick another one";
    } else {
      this.users.push(newUserName);
      document.getElementById('loginWrapper').style.display = 'none';
      document.getElementById('userName').textContent = newUserName;
    }
  };

  addMoment(moment: Moment) {
    moment.id = this.moments.length + 1;
    moment.likes = this.moments.length + 58;
    moment.comments = this.moments.length + 30;
    moment.nickname = document.getElementById('userName').textContent;
    this.moments.push(moment);
  }

}

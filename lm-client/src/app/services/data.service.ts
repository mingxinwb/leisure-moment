import { Injectable } from '@angular/core';

import { mockMoments } from '../mock-moments';
import { Moment } from '../models/moment.model';

@Injectable()
export class DataService {
  moments: Moment[] = mockMoments;

  constructor() { }

  getMoments(): Moment[] {
    return this.moments;
  };

  getMoment(id: number): Moment {
    return this.moments.find((moment) => moment.id === id);
  };

  addMoment(moment: Moment) {
    moment.id = this.moments.length + 1;
    moment.likes = this.moments.length + 58;
    moment.comments = this.moments.length + 30;
    this.moments.push(moment);
  }

}

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

}

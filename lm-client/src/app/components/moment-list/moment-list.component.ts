import { Component, OnInit } from '@angular/core';

import { Moment } from '../../models/moment.model';
import { mockMoments } from '../../mock-moments';


@Component({
  selector: 'app-moment-list',
  templateUrl: './moment-list.component.html',
  styleUrls: ['./moment-list.component.css']
})
export class MomentListComponent implements OnInit {
  moments: Moment[];
  constructor() { }

  ngOnInit() {
    this.getMoments();
  }

  getMoments() {
    this.moments = mockMoments;
  };

}

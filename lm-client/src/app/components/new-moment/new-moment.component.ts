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
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  newMoment: Moment = Object.assign({}, DEFAULT_MOMENT);

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addMoment():void {
    this.dataService.addMoment(this.newMoment);
    this.newMoment = Object.assign({}, DEFAULT_MOMENT);
  };

}

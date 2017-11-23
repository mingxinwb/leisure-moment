import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Moment } from '../../models/moment.model';


@Component({
  selector: 'app-moment-list',
  templateUrl: './moment-list.component.html',
  styleUrls: ['./moment-list.component.css']
})
export class MomentListComponent implements OnInit {
  moments: Moment[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getMoments();
  }

  getMoments(): void {
    this.dataService.getMoments()
        .subscribe(moments => this.moments = moments);

  };

}

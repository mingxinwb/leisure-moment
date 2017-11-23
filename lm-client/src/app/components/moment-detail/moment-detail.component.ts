import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Moment } from '../../models/moment.model';

@Component({
  selector: 'app-moment-detail',
  templateUrl: './moment-detail.component.html',
  styleUrls: ['./moment-detail.component.css']
})
export class MomentDetailComponent implements OnInit {
  moment: Moment;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.moment = this.dataService.getMoment(+params['id']);
    });
  }
}

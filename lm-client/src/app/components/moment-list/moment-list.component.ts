import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Moment } from '../../models/moment.model';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-moment-list',
  templateUrl: './moment-list.component.html',
  styleUrls: ['./moment-list.component.css']
})
export class MomentListComponent implements OnInit {
  moments: Moment[] = [];

  constructor(private dataService: DataService,
              private socketService: SocketService) { }

  ngOnInit() {
    this.getMoments();
    this.socketService.init();
  }

  getMoments(): void {
    this.dataService.getMoments()
        .subscribe(moments => this.moments = moments);

  };

}

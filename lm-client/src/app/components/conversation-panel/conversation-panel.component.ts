import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../services/socket.service';

var users = [];
@Component({
  selector: 'app-conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.css']
})
export class ConversationPanelComponent implements OnInit {
  userName = document.getElementById('userName').textContent;
  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.conversation(this.userName);
    this.socketService.socket.on('usersList', (data) => {
      console.log(data);
      users = data;
    })
  };

}

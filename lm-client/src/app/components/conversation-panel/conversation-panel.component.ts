import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.css']
})
export class ConversationPanelComponent implements OnInit {
  participants: Array<string>;
  
  userName = document.getElementById('userName').textContent;
  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.conversation(this.userName);
    this.socketService.socket.on('usersList', (users) => {
      console.log(JSON.stringify(users));
      this.participants = [JSON.stringify(users)];
    });
  };

}

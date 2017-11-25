import { Injectable } from '@angular/core';

declare var io: any;

@Injectable()
export class SocketService {
  userSocket: any;

  constructor() { }

  init(): void {
    this.userSocket = io(window.location.origin, { query: 'message= ' + 'hello world' });
    
    this.userSocket.on('message', (message) => {
      console.log('message received from server: ' + message);
    });
  }

}

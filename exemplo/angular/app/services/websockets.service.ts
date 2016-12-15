import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as io from 'socket.io-client';


@Injectable()
export class WebsocketsService {
  socket:any;
  constructor() {
    if(!this.socket){
      this.socket = io('http://localhost:7777');
    }
  }

  getBoard():Observable<any[]>{
    return new Observable((observer:any) => {
        this.socket.on('board', (data:any) => {
            observer.next(data);
        });
        return () => this.socket.disconnect();
    });
  }

  sendClick(board:any){
    this.socket.emit('click',board);
  }



}

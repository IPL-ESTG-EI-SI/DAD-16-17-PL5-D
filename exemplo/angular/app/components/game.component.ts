import { Component, OnInit } from '@angular/core';

import { WebsocketsService } from '../services/websockets.service';

@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html'
})
export class GameComponent implements OnInit {

  boards:any[];

  constructor(private websocketsService:WebsocketsService) { }

  ngOnInit() {

    this.websocketsService.getBoard().subscribe(data => this.boards = data);

   }
}

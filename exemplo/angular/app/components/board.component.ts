import { Component, OnInit, Input } from '@angular/core';

import { WebsocketsService } from '../services/websockets.service';

@Component({
  moduleId: module.id,
  selector: 'board',
  templateUrl: 'board.component.html'
})
export class BoardComponent implements OnInit {

  @Input()
  board:any[]
  @Input()
  index:number

  constructor(private websocketsService: WebsocketsService) {

  }

  ngOnInit() {

  }

  clickHandler(event:any, index:number,cell:any ){
    var data = this.board.slice(0)
    data[index]++;
    this.websocketsService.sendClick({board:data, index:this.index});
  }


  getClassForCell(index:number){
    var value = this.board[index];
    if(value == 0) return '';
    if(value <5 ) return 'cell1';
    return 'cell2';
  }
}

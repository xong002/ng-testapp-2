import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  nn = 0;
  incrIntervalId!: any;

  @Output() gameStart: EventEmitter<number> = new EventEmitter();

  startGame() {
    this.incrIntervalId = setInterval(()=>{
      console.log("start number: " + this.nn);
      this.nn++;
      console.log("end number: " + this.nn);
      this.gameStart.emit(this.nn);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.incrIntervalId);
  }


}

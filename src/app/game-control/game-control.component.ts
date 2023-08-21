import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  nn = 0;
  incrIntervalId!: any;
  svc = inject(LoggingService);

  @Output() gameStart: EventEmitter<number> = new EventEmitter();

  startGame() {
    this.incrIntervalId = setInterval(()=>{
      console.log("start number: " + this.nn);
      this.nn++;
      console.log("end number: " + this.nn);
      this.gameStart.emit(this.nn);
    }, 1000);
    this.svc.logMessage('startGame function called')
  }

  stopGame() {
    clearInterval(this.incrIntervalId);
    this.svc.logMessage('stopGame function called')

  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeCounter = 0;
  inActiveCounter = 0;

  constructor() { }

  toInActive(){
    this.activeCounter++;
    console.log('Set from Active to Inactive: ' + this.activeCounter);
  }

  toActive(){
    this.inActiveCounter++;
    console.log('Set from Inactive to Active: ' + this.inActiveCounter);
  }

}

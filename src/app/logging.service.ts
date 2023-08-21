import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logMessage(message: string){
    console.log('this is message from service: ' + message);
  }
}

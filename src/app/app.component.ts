import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-testapp-2';

  parentNumber: number = 0;

  parentFn(event: number){
    this.parentNumber = event;
  }
}

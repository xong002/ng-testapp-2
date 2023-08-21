import { Component, OnInit, inject } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  
  usersArr: User[] = [];
  userService = inject(UserService);

  ngOnInit(): void {
    this.usersArr = this.userService.userArr;
  }

  setToActive(id: number) {
    this.userService.changeStatus(id);
  }
}

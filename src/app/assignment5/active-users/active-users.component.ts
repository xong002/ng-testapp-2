import { Component, OnInit, inject } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  usersArr: User[] = [];
  userService = inject(UserService);

  ngOnInit(): void {
    this.usersArr = this.userService.userArr
  }

  setToInactive(id: number) {
    this.userService.changeStatus(id);
  }
}

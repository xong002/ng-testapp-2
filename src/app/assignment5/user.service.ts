import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

export interface User {
  id: number;
  name: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArr: User[] = [
    {
      id: 1,
      name: 'Max',
      isActive: true
    },
    {
      id: 2,
      name: 'Anna',
      isActive: true
    },
    {
      id: 3,
      name: 'Chris',
      isActive: false
    },
    {
      id: 4,
      name: 'Manu',
      isActive: false
    },
  ];

  constructor(private counterService: CounterService) { }

  changeStatus(id: number) {
    const foundUser = this.userArr.find((user) => {
      return user.id == id
    })
    if (foundUser) {

      if (foundUser.isActive) {
        this.counterService.toInActive();
      } else this.counterService.toActive();

      foundUser.isActive = !foundUser.isActive;
    }
  }



}

import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User = { name: '', surname: '', age: 0, weight: 0, height: 0 };

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}

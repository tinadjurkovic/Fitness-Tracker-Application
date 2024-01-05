import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User | null = null;

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user || { name: '', surname: '', age: 0, weight: 0, height: 0 };
  }  

  isUserLoggedIn(): boolean {
    return this.user !== null && this.user !== undefined;
  }
}

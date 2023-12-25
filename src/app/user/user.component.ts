import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: User = { name: '', surname: '', age: 0, weight: 0, height: 0 };
  showMenu: boolean = false;

  onSubmit() {
    console.log('User submitted:', this.user);
    this.showMenu = true;
  }
}

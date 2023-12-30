import { Component } from '@angular/core';
import { User } from './user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(private userService: UserService, private router: Router) {}

  user: User = { name: '', surname: '', age: 0, weight: 0, height: 0 };
  showMenu: boolean = false;

  onSubmit() {
    console.log('User submitted:', this.user);
    this.showMenu = true;

    this.userService.setUser(this.user);  
    this.showMenu = true;
    this.router.navigate(['/menu']);
  }
}

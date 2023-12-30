import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isActiveOption: string | null = null;

  constructor(private router: Router) {}

  setActiveOption(option: string): void {
    this.isActiveOption = option;

    this.router.navigate(['/menu', option]);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
}
)

export class MenuComponent {
  isActiveOption: string | null = null;

  setActiveOption(option: string): void {
    this.isActiveOption = option;
  }
}
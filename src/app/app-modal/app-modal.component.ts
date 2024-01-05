import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss'],
})
export class AppModalComponent {
  @Input() title: string = '';
  @Input() items: string[] = [];
  @Input() active: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>(); 

  user: any;

  constructor (private userService: UserService) {}

  onCloseModal(): void {
    this.closeModalEvent.emit(); 
  }

  openModal(title: string, items: string[]): void {
    this.title = title;
    this.items = items;
    this.active = true;
  }

  closeModal(): void {
    this.active = false;
  }
}

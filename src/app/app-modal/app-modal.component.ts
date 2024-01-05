import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss'],
})
export class AppModalComponent implements OnInit {
  @Input() active: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  onCloseModal(): void {
    this.active = false;
    this.closeModalEvent.emit();
  }

  private loadUserData(): void {
    this.user = this.userService.getUser();
  }
}

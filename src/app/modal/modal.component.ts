import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal fade" [class.show]="modalActive" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button type="button" class="close" aria-label="Close" (click)="closeModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li *ngFor="let item of modalItems">{{ item }}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="closeModal()">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalTitle: string = '';
  @Input() modalItems: string[] = [];
  @Input() modalActive: boolean = false;

  closeModal(): void {
    this.modalActive = false;
  }
}

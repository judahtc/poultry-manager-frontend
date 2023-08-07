import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string='';
  @ViewChild('modal', { static: true }) modal!: ElementRef;

  openModal(): void {
    this.modal.nativeElement.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  closeModal(): void {
    this.modal.nativeElement.style.display = 'none';
    document.body.classList.remove('modal-open');

  }
}

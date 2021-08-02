import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show = false;
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.cancel.emit();
    this.show = false;
  }

}

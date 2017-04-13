import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  /** Gets or sets the confirm modal title code @property {string} */
  @Input() titleCode: string;

  /** Gets or sets the confirm modal description code @property {string} */
  @Input() descriptionCode: string;

  /** Gets or sets the confirm modal close button code @property {string} */
  @Input() closeCode: string;

  /** Gets or sets the confirm modal cancel code @property {string} */
  @Input() cancelCode: string;

  /** Gets or sets the close modal event @property {EventEmitter} */
  @Output() confirmModal = new EventEmitter();

  /** Gets or sets the close modal event @property {EventEmitter} */
  @Output() cancelModal = new EventEmitter();

  /**
   * Initializes a new instance of the ConfirmModalComponent class.
   * @constructor
   * @param {NgbActiveModal} activeModal The current active modal.
   */
  constructor(private activeModal: NgbActiveModal) {
    this.titleCode = 'common.modal.confirm.title';
    this.descriptionCode = 'common.modal.confirm.description';
    this.closeCode = 'common.modal.btn.confirm';
    this.cancelCode = 'common.modal.btn.cancel';
  }

  ngOnInit() {
  }

  confirm(result: any) {
    this.activeModal.close(result);
    this.confirmModal.emit(result);
  }

  cancel(reason?: any) {
    this.activeModal.dismiss(reason);
    this.cancelModal.emit(reason);
  }
}

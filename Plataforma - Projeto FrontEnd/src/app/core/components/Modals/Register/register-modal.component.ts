import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent {

  public BsModalRef?: BsModalRef;

  public Config = {
    animated: true,
    class: 'modal-dialog-centered'
  };

  constructor(private modalService: BsModalService ) {}

  public ShowModal() {
    setTimeout(() => {
      this.BsModalRef = this.modalService.show(RegisterModalComponent, this.Config);
    }, 0);
  }
}

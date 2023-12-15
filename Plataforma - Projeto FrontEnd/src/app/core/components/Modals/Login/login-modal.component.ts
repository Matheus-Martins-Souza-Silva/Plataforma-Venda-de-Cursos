import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../Register/register-modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  public modalRef?: BsModalRef;

  config = {
    animated: true,
    class: 'modal-dialog-centered'
  };

  constructor(private modalService: BsModalService) {}

  public openModal() {
    this.modalRef = this.modalService.show(LoginModalComponent, this.config);
  }

  public openRegisterModal() {
    const RegisterModal = new RegisterModalComponent(this.modalService);
    RegisterModal.ShowModal();
  }
}

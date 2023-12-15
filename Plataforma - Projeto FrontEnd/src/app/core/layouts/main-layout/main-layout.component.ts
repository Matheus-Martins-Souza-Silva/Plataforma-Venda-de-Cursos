import { Component, TemplateRef, ViewChild } from '@angular/core';
import { LoginModalComponent } from '../../components/Modals/Login/login-modal.component';
import { RegisterModalComponent } from '../../components/Modals/Register/register-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  @ViewChild('loginModalTemplate') modalTemplate!: TemplateRef<void>;

  constructor(private modalService: BsModalService) {}

  public openLoginModal() {
    const loginModal = new LoginModalComponent(this.modalService);
    loginModal.openModal();
  }

  public openRegisterModal() {
    const RegisterModal = new RegisterModalComponent(this.modalService);
    RegisterModal.ShowModal();;
  }
}

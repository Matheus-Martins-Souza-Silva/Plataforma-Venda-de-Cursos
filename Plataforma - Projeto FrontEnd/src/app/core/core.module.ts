import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from '../features/home/home.component';
import { LoginModalComponent } from './components/Modals/Login/login-modal.component';

//Ngx-BootStrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from './components/Modals/Register/register-modal.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    LoginModalComponent,
    RegisterModalComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    MainLayoutComponent
  ],
  providers: [BsModalService, BsModalRef]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from '../features/home/home.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class CoreModule { }

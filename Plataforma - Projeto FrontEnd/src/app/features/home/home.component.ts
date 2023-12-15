import { Component, HostListener } from '@angular/core';
import { profissionais } from 'src/app/shared/models/card-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public profissionais = profissionais;
  public isMobile: boolean = window.innerWidth <= 620;
  public itemsPerSlide: number = this.isMobile ? 1 : 3;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('Evento Funcionando');
    console.log('isMobile = ' + this.isMobile);
    this.isMobile = event.target.innerWidth <= 620;
    this.itemsPerSlide = this.isMobile ? 1 : 3;
  }
}

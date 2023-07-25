import { Component } from '@angular/core';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plataforma';

  constructor(private testeService: TesteService) {}

  OnTest() {
    this.testeService.OnSendTest();
  }
}

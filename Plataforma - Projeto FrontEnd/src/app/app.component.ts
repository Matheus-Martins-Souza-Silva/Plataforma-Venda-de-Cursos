import { Component } from '@angular/core';
import { TesteService } from './teste.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Plataforma';

  constructor(private testeService: TesteService) {
    setTheme('bs5'); // or 'bs4'
  }

  OnTest() {
    this.testeService.OnSendTest();
  }

  DestroyIt() {
    
  }
}

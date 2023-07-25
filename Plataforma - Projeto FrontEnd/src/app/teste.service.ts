import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) { }

  OnSendTest() {

    const testList = {
      nome: "Julia",
      senha: "123456"
    };

    return this.http.post('http://localhost:3000/api/cadastro', testList).subscribe((response) => {
      console.log("Teste Adicionar: ", response);
    }, (error) => {
      console.error("Teste Erro: ", error);
    });
  }
}

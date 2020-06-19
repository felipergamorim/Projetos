import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lista: any = ['Felipe', 'João'];
  nome: string = "";

  save(){
    this.lista.push(this.nome);
  }

  remove(i){
    this.lista.splice(i,1);
  }

  constructor() {}

}

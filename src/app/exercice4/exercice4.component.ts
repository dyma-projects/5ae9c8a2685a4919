import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component{

  public texts: {text: string, id: number}[];

  constructor() {
    this.texts = [
      {text: 'un', id: 1},
      {text: 'deux', id: 2},
      {text: 'trois', id: 3}
    ];
   }

   trackById(index, item): number {
     return item.id;
   }
}

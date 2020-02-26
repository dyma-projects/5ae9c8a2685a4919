import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  name: string = "Square";
  colorBack: string = "red";
  height: string = "100px";
  width: string = "100px";
  borderRed: string = "none"

  changeDiv(color: string): void{
    console.log('ChangeDiv');
    this.colorBack = "white"
    this.height = "100px"
    this.width = "100px"
    this.borderRed = "1px solid red"
  }

  reChangeDiv(color: string): void{
    console.log('Change return');
    this.borderRed = "none"
    this.colorBack = "red"
    this.height = "100px"
    this.width = "100px"
  }

  changeSize(): void{
    console.log('size change');
    this.height = "50px"
    this.width = "50px"
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso1: number = 15;
  progreso2 : number = 25;

  constructor() { }

  ngOnInit() {
  }

  get getProgreso1(){
    return `${this.progreso1}%`
  }

  get getProgreso2(){
    return `${this.progreso2}%`
  }

  cambioValorHijo( valor: number){
    console.log('hello' + valor)
  }

}

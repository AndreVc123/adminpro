import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const promesa = new Promise( (resolve) => {

      resolve('hola mundo');
    });

    promesa.then(() => {
      console.log('hey termine')
    })

    console.log('fin del init')
  }

}

import { Component, OnInit } from '@angular/core';

declare function customInitFunctions();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  
  constructor() { }

  ngOnInit() {
    this.linkTheme.setAttribute('href', localStorage.getItem('theme'));
    customInitFunctions();
  }

}

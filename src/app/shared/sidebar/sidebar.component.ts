import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent  {

  menuItems: any[];

  constructor( private sidebarService: SidebarService, private usuarioService: UsuarioService ) {
    this.menuItems = this.sidebarService.menu;
  }

  logout() {
    this.usuarioService.logout();
  }

}

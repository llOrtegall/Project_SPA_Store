import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', /* Utilizamos para llevar el selector */
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linksMenu: { defaultOptions: Array<any> }
    = { defaultOptions: [] }



  constructor() { }

  ngOnInit(): void {

    this.linksMenu.defaultOptions = [
      {
        name: 'Inicio',
        icon: 'home', // Nombre del icono de google para visualizarlo
        router: ['/inicio']
      },
      {
        name: 'Productos',
        icon: 'local_mall',
        router: ['/products']
      },
      {
        name: 'Contacto',
        icon: 'call',
        router: ['/contact']
      },
      {
        name: 'Login',
        icon: 'login',
        router: ['/auth/login']
      }
    ]
  }

}



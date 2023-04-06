import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', /* Utilizamos para llevar el selector */
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linksMenu: {
    defaultOptions: Array<any>
  } = { defaultOptions: [] }

  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {

    this.linksMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'home', // Nombre del icono de google para visualizarlo
        router: ['/']
      },
      {
        name: 'Products',
        icon: 'local_mall',
        router: ['/']
      },
      {
        name: 'Contacts',
        icon: 'call',
        router: ['/']
      },
      {
        name: 'Login',
        icon: 'login',
        router: ['/']
      },
    ]
  }

}



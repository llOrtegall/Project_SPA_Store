import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css']
})

export class CartShopComponent implements OnInit {

  itemsCart: { cartItems: Array<any> }
  = { cartItems: [] }

  constructor(){}
  ngOnInit(): void {
    this.itemsCart.cartItems = [
      /* por el momento estoy representando los productos mediante una lista de item statica
      la idea principal es que estas se traigan desde la base de datos cuando el cliente de le
      click al prodcuto que desea llevar */
      {
        img: '/assets/logo.svg',
        descripcion: 'Descripción here !!!',
        cantidad: 1,
        precio: 300,
      },
      {
        img: '/assets/logo.svg',
        descripcion: 'Descripción here !!!',
        cantidad: 1,
        precio: 300,
      },
      {
        img: '/assets/logo.svg',
        descripcion: 'Descripción here !!!',
        cantidad: 1,
        precio: 300,
      },
    ]
  }



}

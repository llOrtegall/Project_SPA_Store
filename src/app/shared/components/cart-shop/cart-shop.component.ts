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
      {
        img: '/assets/logo.svg',
        descripcion: 'Aquí la descripción del producto',
        cantidad: 1,
        precio: 300,
      },
      {
        img: '/assets/logo.svg',
        descripcion: 'Aquí la descripción del producto',
        cantidad: 1,
        precio: 300,
      },
      {
        img: '/assets/logo.svg',
        descripcion: 'Aquí la descripción del producto',
        cantidad: 1,
        precio: 300,
      },

    ]

  }



}

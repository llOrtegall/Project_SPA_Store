import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  cardItems: { cardDefult: Array<any> } = {
    cardDefult: []
  }

  constructor() {

  }

  ngOnInit(): void {
    this.cardItems.cardDefult = [
      {
        Class: 'card',
        img: '/assets/product.jpeg',
        title: 'titulo Product',
        describe: 'Product descripcion del mismo el cual es algo largo',
      },

      {
        Class: 'card',
        img: '/assets/product.jpeg',
        title: 'titulo Product',
        describe: 'Product descripcion del mismo el cual es algo largo',
      },

      {
        Class: 'card',
        img: '/assets/product.jpeg',
        title: 'titulo Product',
        describe: 'Product descripcion del mismo el cual es algo largo',
      },

      {
        Class: 'card',
        img: '/assets/product.jpeg',
        title: 'titulo Product',
        describe: 'Product descripcion del mismo el cual es algo largo',
      }
    ]
  }
}

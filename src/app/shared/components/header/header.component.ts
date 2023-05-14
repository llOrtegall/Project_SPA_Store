import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navLinks: Array<any> = [];

  constructor() {}

  ngOnInit() {
    this.navLinks = [
      {
        title: 'Home',
        url: '/home',
      },
      {
        title: 'About',
        url: '/about',
      },
      {
        title: 'Contact',
        url: '/contact',
      },
      {
        title: 'Products',
        url: '/products',
      }
  ];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  nameCompany: string = 'COMPANY NAME';

  LinksNav: Array<any> = [];
  LinkSocial: Array<any> = [];

  ngOnInit(): void {
    this.LinksNav = [
      {
        name: 'Home',
        icon: 'uil uil-estate'
      },
      {
        name: 'About',
        icon: 'uil uil-cloud-info'
      },
      {
        name: 'Products',
        icon: 'uil uil-shopping-cart'
      },
      {
        name: 'Contact',
        icon: 'uil uil-at'
      },
    ];

    this.LinkSocial = [
      {
        icon: 'uil uil-facebook-f'
      },
      {
        icon: 'uil uil-instagram'
      },
      {
        icon: 'uil uil-youtube'
      }
    ]

  }
}

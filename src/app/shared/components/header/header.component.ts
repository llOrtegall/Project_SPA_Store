import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  accesLinks: Array<any> = [];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.accesLinks = [
      {
        title: 'Home',
        router: ["/"]
      },
      { 
        title: 'Contact',
        router: ['/contact']
      },
      { 
        title: 'Products',
        router: ['/products']
      },
      { 
        title: 'About Us',
        router: ['/about']
      }
    ]
  }

}

//Modulo básico no tiene routing
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CartShopComponent } from './components/cart-shop/cart-shop.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CartShopComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    CartShopComponent,
    FooterComponent
  ]
})
export class SharedModule { }


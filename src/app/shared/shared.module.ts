//Modulo básico no tiene routing
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CartShopComponent } from './components/cart-shop/cart-shop.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CartShopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }


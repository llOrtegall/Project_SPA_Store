import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'products',
    loadChildren:() => import(`@modules/products/products.module`).then(m => m.ProductsModule)
  },
  {
    path:'contact',
    loadChildren:() => import(`@modules/contact/contact.module`).then(m => m.ContactModule)
  },
  {
    path:'inicio',
    loadChildren:() => import(`@modules/inicio/inicio.module`).then(m => m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

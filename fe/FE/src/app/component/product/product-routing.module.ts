import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create', component: ProductCreateComponent},
  {path: 'update/:id', component: ProductListComponent},
  {path: 'detail/:id', component: ProductDetailComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

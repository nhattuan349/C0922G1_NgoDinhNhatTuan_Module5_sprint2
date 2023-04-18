import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create', component: ProductListComponent},
  {path: 'update/:id', component: ProductListComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

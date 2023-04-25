import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSamsungRoutingModule } from './product-samsung-routing.module';
import { ProductSamsungListComponent } from './product-samsung-list/product-samsung-list.component';


@NgModule({
  declarations: [ProductSamsungListComponent],
  imports: [
    CommonModule,
    ProductSamsungRoutingModule
  ]
})
export class ProductSamsungModule { }

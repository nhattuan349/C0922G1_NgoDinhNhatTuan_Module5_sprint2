import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSurfaceRoutingModule } from './product-surface-routing.module';
import { ProductSurfaceListComponent } from './product-surface-list/product-surface-list.component';


@NgModule({
  declarations: [ProductSurfaceListComponent],
  imports: [
    CommonModule,
    ProductSurfaceRoutingModule
  ]
})
export class ProductSurfaceModule { }

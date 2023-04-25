import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDellRoutingModule } from './product-dell-routing.module';
import { ProductDellListComponent } from './product-dell-list/product-dell-list.component';
import { ProductDellAlienwareListComponent } from './product-dell-alienware-list/product-dell-alienware-list.component';
import { ProductDellPrecisionListComponent } from './product-dell-precision-list/product-dell-precision-list.component';
import { ProductDellXpsListComponent } from './product-dell-xps-list/product-dell-xps-list.component';
import { ProductDellVostroComponent } from './product-dell-vostro-list/product-dell-vostro.component';
import { ProductDellInspironComponent } from './product-dell-inspiron-list/product-dell-inspiron.component';
import { ProductDellLatitudeComponent } from './product-dell-latitude-list/product-dell-latitude.component';
import { ProductDellGSeriListComponent } from './product-dell-g-seri-list/product-dell-g-seri-list.component';


@NgModule({
  declarations: [ProductDellListComponent, ProductDellAlienwareListComponent, ProductDellPrecisionListComponent, ProductDellXpsListComponent, ProductDellVostroComponent, ProductDellInspironComponent, ProductDellLatitudeComponent, ProductDellGSeriListComponent],
  imports: [
    CommonModule,
    ProductDellRoutingModule
  ]
})
export class ProductDellModule { }

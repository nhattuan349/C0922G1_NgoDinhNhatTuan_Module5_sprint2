import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductMsiRoutingModule } from './product-msi-routing.module';
import { ProductMsiListComponent } from './product-msi-list/product-msi-list.component';
import { ProductMsiGSeriComponent } from './product-msi-g-seri-list/product-msi-g-seri.component';
import { ProductMsiBravoComponent } from './product-msi-bravo-list/product-msi-bravo.component';
import { ProductMsiModernComponent } from './product-msi-modern-list/product-msi-modern.component';


@NgModule({
  declarations: [ProductMsiListComponent, ProductMsiGSeriComponent, ProductMsiBravoComponent, ProductMsiModernComponent],
  imports: [
    CommonModule,
    ProductMsiRoutingModule
  ]
})
export class ProductMsiModule { }

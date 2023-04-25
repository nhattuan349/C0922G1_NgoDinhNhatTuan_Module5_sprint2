import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAsusRoutingModule } from './product-asus-routing.module';
import { ProductAsusListComponent } from './product-asus-list/product-asus-list.component';
import { ProductAsusTufComponent } from './product-asus-tuf-list/product-asus-tuf.component';
import { ProductAsusZenbookComponent } from './product-asus-zenbook-list/product-asus-zenbook.component';
import { ProductAsusVivobookComponent } from './product-asus-vivobook-list/product-asus-vivobook.component';
import { ProductAsusRogComponent } from './product-asus-rog-list/product-asus-rog.component';


@NgModule({
  declarations: [ProductAsusListComponent, ProductAsusTufComponent, ProductAsusZenbookComponent, ProductAsusVivobookComponent, ProductAsusRogComponent],
  imports: [
    CommonModule,
    ProductAsusRoutingModule
  ]
})
export class ProductAsusModule { }

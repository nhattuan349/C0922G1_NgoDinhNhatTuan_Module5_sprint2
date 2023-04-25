import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAcerRoutingModule } from './product-acer-routing.module';
import { ProductAcerListComponent } from './product-acer-list-list/product-acer-list.component';
import { ProductAcerAspireComponent } from './product-acer-aspire-list/product-acer-aspire.component';
import { ProductAcerNitroComponent } from './product-acer-nitro-list/product-acer-nitro.component';
import { ProductAcerSpinComponent } from './product-acer-spin-list/product-acer-spin.component';
import { ProductAcerPredatorComponent } from './product-acer-predator-list/product-acer-predator.component';
import { ProductAcerSwiftComponent } from './product-acer-swift-list/product-acer-swift.component';


@NgModule({
  declarations: [ProductAcerListComponent, ProductAcerAspireComponent, ProductAcerNitroComponent, ProductAcerSpinComponent, ProductAcerPredatorComponent, ProductAcerSwiftComponent],
  imports: [
    CommonModule,
    ProductAcerRoutingModule
  ]
})
export class ProductAcerModule { }

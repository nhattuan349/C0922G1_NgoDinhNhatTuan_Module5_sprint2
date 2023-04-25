import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductHpRoutingModule } from './product-hp-routing.module';
import { ProductHpListComponent } from './product-hp-list/product-hp-list.component';
import { ProductHpElitebookComponent } from './product-hp-elitebook-list/product-hp-elitebook.component';
import { ProductHpSpectreListComponent } from './product-hp-spectre-list/product-hp-spectre-list.component';
import { ProductHpPavilionListComponent } from './product-hp-pavilion-list/product-hp-pavilion-list.component';
import { ProductHpProbookComponent } from './product-hp-probook-list/product-hp-probook.component';
import { ProductHpOmenListComponent } from './product-hp-omen-list/product-hp-omen-list.component';
import { ProductHpEnvyListComponent } from './product-hp-envy-list/product-hp-envy-list.component';
import { ProductHpZbookListComponent } from './product-hp-zbook-list/product-hp-zbook-list.component';


@NgModule({
  declarations: [ProductHpListComponent, ProductHpElitebookComponent, ProductHpSpectreListComponent, ProductHpPavilionListComponent, ProductHpProbookComponent, ProductHpOmenListComponent, ProductHpEnvyListComponent, ProductHpZbookListComponent],
  imports: [
    CommonModule,
    ProductHpRoutingModule
  ]
})
export class ProductHpModule { }

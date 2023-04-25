import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductLenovoRoutingModule } from './product-lenovo-routing.module';
import { ProductLenovoListComponent } from './product-lenovo-list/product-lenovo-list.component';
import { ProductLenovoIdeapadComponent } from './product-lenovo-ideapad-list/product-lenovo-ideapad.component';
import { ProductLenovoThinkBookComponent } from './product-lenovo-think-book-list/product-lenovo-think-book.component';
import { ProductLenovoYogaComponent } from './product-lenovo-yoga-list/product-lenovo-yoga.component';
import { ProductLenovoLegionComponent } from './product-lenovo-legion-list/product-lenovo-legion.component';
import { ProductLenovoThinkPadComponent } from './product-lenovo-think-pad-list/product-lenovo-think-pad.component';


@NgModule({
  declarations: [ProductLenovoListComponent, ProductLenovoIdeapadComponent, ProductLenovoThinkBookComponent, ProductLenovoYogaComponent, ProductLenovoLegionComponent, ProductLenovoThinkPadComponent],
  imports: [
    CommonModule,
    ProductLenovoRoutingModule
  ]
})
export class ProductLenovoModule { }

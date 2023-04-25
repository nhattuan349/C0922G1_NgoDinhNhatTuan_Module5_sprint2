import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfaceBookRoutingModule } from './surface-book-routing.module';
import { SurfaceBookListComponent } from './surface-book-list/surface-book-list.component';
import { SurfaceBookTwoListComponent } from './surface-book-two-list/surface-book-two-list.component';
import { SurfaceBookThreeListComponent } from './surface-book-three-list/surface-book-three-list.component';


@NgModule({
  declarations: [SurfaceBookListComponent, SurfaceBookTwoListComponent, SurfaceBookThreeListComponent],
  imports: [
    CommonModule,
    SurfaceBookRoutingModule
  ]
})
export class SurfaceBookModule { }

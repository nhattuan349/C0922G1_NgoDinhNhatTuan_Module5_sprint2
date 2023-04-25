import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfaceGoRoutingModule } from './surface-go-routing.module';
import { SurfaceGoListComponent } from './surface-go-list/surface-go-list.component';
import { SurfaceGoTwoListComponent } from './surface-go-two-list/surface-go-two-list.component';
import { SurfaceGoThreeListComponent } from './surface-go-three-list/surface-go-three-list.component';


@NgModule({
  declarations: [SurfaceGoListComponent, SurfaceGoTwoListComponent, SurfaceGoThreeListComponent],
  imports: [
    CommonModule,
    SurfaceGoRoutingModule
  ]
})
export class SurfaceGoModule { }

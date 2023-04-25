import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfaceLaptopRoutingModule } from './surface-laptop-routing.module';
import { SurfaceLaptopThreeComponent } from './surface-laptop-three-list/surface-laptop-three.component';
import { SurfaceLaptopFourComponent } from './surface-laptop-four-list/surface-laptop-four.component';
import { SurfaceLaptopGoComponent } from './surface-laptop-go-list/surface-laptop-go.component';
import { SurfaceLaptopStudioComponent } from './surface-laptop-studio-list/surface-laptop-studio.component';
import { SurfaceLaptopListComponent } from './surface-laptop-list/surface-laptop-list.component';


@NgModule({
  declarations: [SurfaceLaptopThreeComponent, SurfaceLaptopFourComponent, SurfaceLaptopGoComponent, SurfaceLaptopStudioComponent, SurfaceLaptopListComponent],
  imports: [
    CommonModule,
    SurfaceLaptopRoutingModule
  ]
})
export class SurfaceLaptopModule { }

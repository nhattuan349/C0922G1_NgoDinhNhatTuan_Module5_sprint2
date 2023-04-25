import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfaceDuoRoutingModule } from './surface-duo-routing.module';
import { SurfaceDuoListComponent } from './surface-duo-list/surface-duo-list.component';
import { SurfaceDuoTwoListComponent } from './surface-duo-two-list/surface-duo-two-list.component';


@NgModule({
  declarations: [SurfaceDuoListComponent, SurfaceDuoTwoListComponent],
  imports: [
    CommonModule,
    SurfaceDuoRoutingModule
  ]
})
export class SurfaceDuoModule { }

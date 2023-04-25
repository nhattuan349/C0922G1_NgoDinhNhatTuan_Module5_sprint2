import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurfaceProRoutingModule } from './surface-pro-routing.module';
import { SurfaceProSixComponent } from './surface-pro-six-list/surface-pro-six.component';
import { SurfaceProSevenComponent } from './surface-pro-seven-list/surface-pro-seven.component';
import { SurfaceProEightComponent } from './surface-pro-eight-list/surface-pro-eight.component';
import { SurfaceProXComponent } from './surface-pro-x-list/surface-pro-x.component';
import { SurfaceProListComponent } from './surface-pro-list/surface-pro-list.component';


@NgModule({
  declarations: [SurfaceProSixComponent, SurfaceProSevenComponent, SurfaceProEightComponent, SurfaceProXComponent, SurfaceProListComponent],
  imports: [
    CommonModule,
    SurfaceProRoutingModule
  ]
})
export class SurfaceProModule { }

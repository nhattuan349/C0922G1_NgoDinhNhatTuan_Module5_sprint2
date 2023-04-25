import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceLaptopStudioComponent } from './surface-laptop-studio.component';

describe('SurfaceLaptopStudioComponent', () => {
  let component: SurfaceLaptopStudioComponent;
  let fixture: ComponentFixture<SurfaceLaptopStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceLaptopStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceLaptopStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

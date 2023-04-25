import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceLaptopThreeComponent } from './surface-laptop-three.component';

describe('SurfaceLaptopThreeComponent', () => {
  let component: SurfaceLaptopThreeComponent;
  let fixture: ComponentFixture<SurfaceLaptopThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceLaptopThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceLaptopThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

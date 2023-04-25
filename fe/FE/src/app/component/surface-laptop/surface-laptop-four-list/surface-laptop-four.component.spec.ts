import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceLaptopFourComponent } from './surface-laptop-four.component';

describe('SurfaceLaptopFourComponent', () => {
  let component: SurfaceLaptopFourComponent;
  let fixture: ComponentFixture<SurfaceLaptopFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceLaptopFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceLaptopFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

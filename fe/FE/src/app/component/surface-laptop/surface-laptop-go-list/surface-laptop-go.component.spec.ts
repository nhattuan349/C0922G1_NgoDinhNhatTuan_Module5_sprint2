import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceLaptopGoComponent } from './surface-laptop-go.component';

describe('SurfaceLaptopGoComponent', () => {
  let component: SurfaceLaptopGoComponent;
  let fixture: ComponentFixture<SurfaceLaptopGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceLaptopGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceLaptopGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

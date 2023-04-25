import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceLaptopListComponent } from './surface-laptop-list.component';

describe('SurfaceLaptopListComponent', () => {
  let component: SurfaceLaptopListComponent;
  let fixture: ComponentFixture<SurfaceLaptopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceLaptopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceLaptopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

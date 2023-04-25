import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceDuoTwoListComponent } from './surface-duo-two-list.component';

describe('SurfaceDuoTwoListComponent', () => {
  let component: SurfaceDuoTwoListComponent;
  let fixture: ComponentFixture<SurfaceDuoTwoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceDuoTwoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceDuoTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

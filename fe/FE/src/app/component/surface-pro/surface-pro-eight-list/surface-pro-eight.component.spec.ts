import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceProEightComponent } from './surface-pro-eight.component';

describe('SurfaceProEightComponent', () => {
  let component: SurfaceProEightComponent;
  let fixture: ComponentFixture<SurfaceProEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceProEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceProEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

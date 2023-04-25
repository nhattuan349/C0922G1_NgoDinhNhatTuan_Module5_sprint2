import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceProSevenComponent } from './surface-pro-seven.component';

describe('SurfaceProSevenComponent', () => {
  let component: SurfaceProSevenComponent;
  let fixture: ComponentFixture<SurfaceProSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceProSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceProSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

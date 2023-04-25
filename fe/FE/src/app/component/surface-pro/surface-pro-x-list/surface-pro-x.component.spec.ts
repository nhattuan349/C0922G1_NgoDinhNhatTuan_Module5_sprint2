import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceProXComponent } from './surface-pro-x.component';

describe('SurfaceProXComponent', () => {
  let component: SurfaceProXComponent;
  let fixture: ComponentFixture<SurfaceProXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceProXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceProXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

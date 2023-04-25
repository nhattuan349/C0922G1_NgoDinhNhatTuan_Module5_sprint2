import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceProListComponent } from './surface-pro-list.component';

describe('SurfaceProListComponent', () => {
  let component: SurfaceProListComponent;
  let fixture: ComponentFixture<SurfaceProListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceProListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceProListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

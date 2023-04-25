import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceDuoListComponent } from './surface-duo-list.component';

describe('SurfaceDuoListComponent', () => {
  let component: SurfaceDuoListComponent;
  let fixture: ComponentFixture<SurfaceDuoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceDuoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceDuoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

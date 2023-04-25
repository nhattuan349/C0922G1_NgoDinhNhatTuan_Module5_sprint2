import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceGoTwoListComponent } from './surface-go-two-list.component';

describe('SurfaceGoTwoListComponent', () => {
  let component: SurfaceGoTwoListComponent;
  let fixture: ComponentFixture<SurfaceGoTwoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceGoTwoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceGoTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

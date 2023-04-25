import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceBookTwoListComponent } from './surface-book-two-list.component';

describe('SurfaceBookTwoListComponent', () => {
  let component: SurfaceBookTwoListComponent;
  let fixture: ComponentFixture<SurfaceBookTwoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceBookTwoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceBookTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

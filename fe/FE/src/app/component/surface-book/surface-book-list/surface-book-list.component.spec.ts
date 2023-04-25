import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceBookListComponent } from './surface-book-list.component';

describe('SurfaceBookListComponent', () => {
  let component: SurfaceBookListComponent;
  let fixture: ComponentFixture<SurfaceBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

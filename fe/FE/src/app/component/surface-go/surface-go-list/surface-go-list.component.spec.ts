import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceGoListComponent } from './surface-go-list.component';

describe('SurfaceGoListComponent', () => {
  let component: SurfaceGoListComponent;
  let fixture: ComponentFixture<SurfaceGoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceGoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceGoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

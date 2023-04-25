import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceGoThreeListComponent } from './surface-go-three-list.component';

describe('SurfaceGoThreeListComponent', () => {
  let component: SurfaceGoThreeListComponent;
  let fixture: ComponentFixture<SurfaceGoThreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceGoThreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceGoThreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

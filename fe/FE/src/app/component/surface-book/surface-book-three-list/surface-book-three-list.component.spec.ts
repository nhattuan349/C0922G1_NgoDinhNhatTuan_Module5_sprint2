import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceBookThreeListComponent } from './surface-book-three-list.component';

describe('SurfaceBookThreeListComponent', () => {
  let component: SurfaceBookThreeListComponent;
  let fixture: ComponentFixture<SurfaceBookThreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceBookThreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceBookThreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceProSixComponent } from './surface-pro-six.component';

describe('SurfaceProSixComponent', () => {
  let component: SurfaceProSixComponent;
  let fixture: ComponentFixture<SurfaceProSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceProSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceProSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

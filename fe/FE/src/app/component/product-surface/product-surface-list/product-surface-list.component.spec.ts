import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSurfaceListComponent } from './product-surface-list.component';

describe('ProductSurfaceListComponent', () => {
  let component: ProductSurfaceListComponent;
  let fixture: ComponentFixture<ProductSurfaceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSurfaceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSurfaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

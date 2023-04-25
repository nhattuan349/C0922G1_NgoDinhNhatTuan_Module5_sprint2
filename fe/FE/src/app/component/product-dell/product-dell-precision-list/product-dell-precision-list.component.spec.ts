import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDellPrecisionListComponent } from './product-dell-precision-list.component';

describe('ProductDellPrecisionListComponent', () => {
  let component: ProductDellPrecisionListComponent;
  let fixture: ComponentFixture<ProductDellPrecisionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDellPrecisionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDellPrecisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

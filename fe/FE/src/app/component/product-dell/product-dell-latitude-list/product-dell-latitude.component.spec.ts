import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDellLatitudeComponent } from './product-dell-latitude.component';

describe('ProductDellLatitudeComponent', () => {
  let component: ProductDellLatitudeComponent;
  let fixture: ComponentFixture<ProductDellLatitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDellLatitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDellLatitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

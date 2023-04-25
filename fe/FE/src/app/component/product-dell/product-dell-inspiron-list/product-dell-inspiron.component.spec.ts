import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDellInspironComponent } from './product-dell-inspiron.component';

describe('ProductDellInspironComponent', () => {
  let component: ProductDellInspironComponent;
  let fixture: ComponentFixture<ProductDellInspironComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDellInspironComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDellInspironComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

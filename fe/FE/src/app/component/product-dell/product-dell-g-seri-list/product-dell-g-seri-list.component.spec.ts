import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDellGSeriListComponent } from './product-dell-g-seri-list.component';

describe('ProductDellGSeriListComponent', () => {
  let component: ProductDellGSeriListComponent;
  let fixture: ComponentFixture<ProductDellGSeriListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDellGSeriListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDellGSeriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

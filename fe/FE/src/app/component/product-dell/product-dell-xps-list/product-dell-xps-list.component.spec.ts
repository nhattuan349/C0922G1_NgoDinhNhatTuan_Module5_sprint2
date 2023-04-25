import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDellXpsListComponent } from './product-dell-xps-list.component';

describe('ProductDellXpsListComponent', () => {
  let component: ProductDellXpsListComponent;
  let fixture: ComponentFixture<ProductDellXpsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDellXpsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDellXpsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

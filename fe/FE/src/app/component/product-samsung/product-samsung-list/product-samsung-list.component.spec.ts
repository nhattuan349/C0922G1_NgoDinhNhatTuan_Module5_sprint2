import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSamsungListComponent } from './product-samsung-list.component';

describe('ProductSamsungListComponent', () => {
  let component: ProductSamsungListComponent;
  let fixture: ComponentFixture<ProductSamsungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSamsungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSamsungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

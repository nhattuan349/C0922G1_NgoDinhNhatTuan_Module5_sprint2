import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDellListComponent } from './product-dell-list.component';

describe('ProductDellListComponent', () => {
  let component: ProductDellListComponent;
  let fixture: ComponentFixture<ProductDellListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDellListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

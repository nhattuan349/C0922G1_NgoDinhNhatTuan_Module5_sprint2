import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMsiModernComponent } from './product-msi-modern.component';

describe('ProductMsiModernComponent', () => {
  let component: ProductMsiModernComponent;
  let fixture: ComponentFixture<ProductMsiModernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMsiModernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMsiModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

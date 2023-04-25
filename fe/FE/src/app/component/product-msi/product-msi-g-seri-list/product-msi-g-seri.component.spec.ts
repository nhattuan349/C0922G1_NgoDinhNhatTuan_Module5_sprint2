import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMsiGSeriComponent } from './product-msi-g-seri.component';

describe('ProductMsiGSeriComponent', () => {
  let component: ProductMsiGSeriComponent;
  let fixture: ComponentFixture<ProductMsiGSeriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMsiGSeriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMsiGSeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

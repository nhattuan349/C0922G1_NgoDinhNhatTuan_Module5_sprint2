import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAcerSpinComponent } from './product-acer-spin.component';

describe('ProductAcerSpinComponent', () => {
  let component: ProductAcerSpinComponent;
  let fixture: ComponentFixture<ProductAcerSpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAcerSpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAcerSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

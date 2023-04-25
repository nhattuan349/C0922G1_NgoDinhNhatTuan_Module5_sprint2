import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAcerAspireComponent } from './product-acer-aspire.component';

describe('ProductAcerAspireComponent', () => {
  let component: ProductAcerAspireComponent;
  let fixture: ComponentFixture<ProductAcerAspireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAcerAspireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAcerAspireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

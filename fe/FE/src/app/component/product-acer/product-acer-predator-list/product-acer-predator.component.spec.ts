import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAcerPredatorComponent } from './product-acer-predator.component';

describe('ProductAcerPredatorComponent', () => {
  let component: ProductAcerPredatorComponent;
  let fixture: ComponentFixture<ProductAcerPredatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAcerPredatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAcerPredatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

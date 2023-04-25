import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAcerSwiftComponent } from './product-acer-swift.component';

describe('ProductAcerSwiftComponent', () => {
  let component: ProductAcerSwiftComponent;
  let fixture: ComponentFixture<ProductAcerSwiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAcerSwiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAcerSwiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

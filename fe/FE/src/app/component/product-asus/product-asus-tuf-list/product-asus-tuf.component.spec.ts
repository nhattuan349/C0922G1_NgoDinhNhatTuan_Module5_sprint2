import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsusTufComponent } from './product-asus-tuf.component';

describe('ProductAsusTufComponent', () => {
  let component: ProductAsusTufComponent;
  let fixture: ComponentFixture<ProductAsusTufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAsusTufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAsusTufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

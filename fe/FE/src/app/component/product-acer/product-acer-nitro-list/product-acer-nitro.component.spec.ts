import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAcerNitroComponent } from './product-acer-nitro.component';

describe('ProductAcerNitroComponent', () => {
  let component: ProductAcerNitroComponent;
  let fixture: ComponentFixture<ProductAcerNitroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAcerNitroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAcerNitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

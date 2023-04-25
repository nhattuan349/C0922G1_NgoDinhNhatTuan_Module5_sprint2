import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsusRogComponent } from './product-asus-rog.component';

describe('ProductAsusRogComponent', () => {
  let component: ProductAsusRogComponent;
  let fixture: ComponentFixture<ProductAsusRogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAsusRogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAsusRogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

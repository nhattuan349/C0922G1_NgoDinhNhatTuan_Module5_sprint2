import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLenovoLegionComponent } from './product-lenovo-legion.component';

describe('ProductLenovoLegionComponent', () => {
  let component: ProductLenovoLegionComponent;
  let fixture: ComponentFixture<ProductLenovoLegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLenovoLegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLenovoLegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

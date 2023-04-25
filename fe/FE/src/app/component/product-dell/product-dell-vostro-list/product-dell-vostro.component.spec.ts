import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDellVostroComponent } from './product-dell-vostro.component';

describe('ProductDellVostroComponent', () => {
  let component: ProductDellVostroComponent;
  let fixture: ComponentFixture<ProductDellVostroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDellVostroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDellVostroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

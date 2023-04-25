import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsusZenbookComponent } from './product-asus-zenbook.component';

describe('ProductAsusZenbookComponent', () => {
  let component: ProductAsusZenbookComponent;
  let fixture: ComponentFixture<ProductAsusZenbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAsusZenbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAsusZenbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

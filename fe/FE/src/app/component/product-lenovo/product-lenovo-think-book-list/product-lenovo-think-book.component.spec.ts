import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLenovoThinkBookComponent } from './product-lenovo-think-book.component';

describe('ProductLenovoThinkBookComponent', () => {
  let component: ProductLenovoThinkBookComponent;
  let fixture: ComponentFixture<ProductLenovoThinkBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLenovoThinkBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLenovoThinkBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

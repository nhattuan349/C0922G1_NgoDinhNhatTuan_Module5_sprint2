import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLenovoThinkPadComponent } from './product-lenovo-think-pad.component';

describe('ProductLenovoThinkPadComponent', () => {
  let component: ProductLenovoThinkPadComponent;
  let fixture: ComponentFixture<ProductLenovoThinkPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLenovoThinkPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLenovoThinkPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

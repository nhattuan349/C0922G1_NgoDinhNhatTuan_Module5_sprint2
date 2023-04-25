import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLenovoYogaComponent } from './product-lenovo-yoga.component';

describe('ProductLenovoYogaComponent', () => {
  let component: ProductLenovoYogaComponent;
  let fixture: ComponentFixture<ProductLenovoYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLenovoYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLenovoYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

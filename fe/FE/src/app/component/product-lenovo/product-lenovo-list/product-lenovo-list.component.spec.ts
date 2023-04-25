import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLenovoListComponent } from './product-lenovo-list.component';

describe('ProductLenovoListComponent', () => {
  let component: ProductLenovoListComponent;
  let fixture: ComponentFixture<ProductLenovoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLenovoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLenovoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLenovoIdeapadComponent } from './product-lenovo-ideapad.component';

describe('ProductLenovoIdeapadComponent', () => {
  let component: ProductLenovoIdeapadComponent;
  let fixture: ComponentFixture<ProductLenovoIdeapadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLenovoIdeapadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLenovoIdeapadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

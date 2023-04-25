import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDellAlienwareListComponent } from './product-dell-alienware-list.component';

describe('ProductDellAlienwareListComponent', () => {
  let component: ProductDellAlienwareListComponent;
  let fixture: ComponentFixture<ProductDellAlienwareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDellAlienwareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDellAlienwareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

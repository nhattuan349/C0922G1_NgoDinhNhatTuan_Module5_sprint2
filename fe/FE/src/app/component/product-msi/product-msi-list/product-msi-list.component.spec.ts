import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMsiListComponent } from './product-msi-list.component';

describe('ProductMsiListComponent', () => {
  let component: ProductMsiListComponent;
  let fixture: ComponentFixture<ProductMsiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMsiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMsiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

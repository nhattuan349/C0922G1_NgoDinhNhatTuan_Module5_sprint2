import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMsiBravoComponent } from './product-msi-bravo.component';

describe('ProductMsiBravoComponent', () => {
  let component: ProductMsiBravoComponent;
  let fixture: ComponentFixture<ProductMsiBravoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMsiBravoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMsiBravoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

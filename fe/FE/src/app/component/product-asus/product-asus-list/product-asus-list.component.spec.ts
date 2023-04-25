import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsusListComponent } from './product-asus-list.component';

describe('ProductAsusListComponent', () => {
  let component: ProductAsusListComponent;
  let fixture: ComponentFixture<ProductAsusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAsusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAsusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

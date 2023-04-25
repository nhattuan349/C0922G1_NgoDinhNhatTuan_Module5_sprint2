import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAcerListComponent } from './product-acer-list.component';

describe('ProductAcerListComponent', () => {
  let component: ProductAcerListComponent;
  let fixture: ComponentFixture<ProductAcerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAcerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAcerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

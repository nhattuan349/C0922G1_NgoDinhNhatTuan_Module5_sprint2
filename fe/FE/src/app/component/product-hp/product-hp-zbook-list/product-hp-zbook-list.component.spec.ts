import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHpZbookListComponent } from './product-hp-zbook-list.component';

describe('ProductHpZbookListComponent', () => {
  let component: ProductHpZbookListComponent;
  let fixture: ComponentFixture<ProductHpZbookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHpZbookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHpZbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

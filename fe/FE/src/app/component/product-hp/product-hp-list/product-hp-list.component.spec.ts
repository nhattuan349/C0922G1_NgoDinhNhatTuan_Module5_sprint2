import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHpListComponent } from './product-hp-list.component';

describe('ProductHpListComponent', () => {
  let component: ProductHpListComponent;
  let fixture: ComponentFixture<ProductHpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

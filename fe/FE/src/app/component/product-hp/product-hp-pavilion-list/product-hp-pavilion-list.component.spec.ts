import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHpPavilionListComponent } from './product-hp-pavilion-list.component';

describe('ProductHpPavilionListComponent', () => {
  let component: ProductHpPavilionListComponent;
  let fixture: ComponentFixture<ProductHpPavilionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHpPavilionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHpPavilionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

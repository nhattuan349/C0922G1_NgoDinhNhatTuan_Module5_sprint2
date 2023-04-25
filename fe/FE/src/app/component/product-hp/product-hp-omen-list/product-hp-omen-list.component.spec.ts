import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHpOmenListComponent } from './product-hp-omen-list.component';

describe('ProductHpOmenListComponent', () => {
  let component: ProductHpOmenListComponent;
  let fixture: ComponentFixture<ProductHpOmenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHpOmenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHpOmenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

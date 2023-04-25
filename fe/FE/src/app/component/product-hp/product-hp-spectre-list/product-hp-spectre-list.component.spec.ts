import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHpSpectreListComponent } from './product-hp-spectre-list.component';

describe('ProductHpSpectreListComponent', () => {
  let component: ProductHpSpectreListComponent;
  let fixture: ComponentFixture<ProductHpSpectreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHpSpectreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHpSpectreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHpEnvyListComponent } from './product-hp-envy-list.component';

describe('ProductHpEnvyListComponent', () => {
  let component: ProductHpEnvyListComponent;
  let fixture: ComponentFixture<ProductHpEnvyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHpEnvyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHpEnvyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

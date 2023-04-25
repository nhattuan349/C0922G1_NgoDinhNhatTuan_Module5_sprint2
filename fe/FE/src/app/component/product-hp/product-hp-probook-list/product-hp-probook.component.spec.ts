import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHpProbookComponent } from './product-hp-probook.component';

describe('ProductHpProbookComponent', () => {
  let component: ProductHpProbookComponent;
  let fixture: ComponentFixture<ProductHpProbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHpProbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHpProbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

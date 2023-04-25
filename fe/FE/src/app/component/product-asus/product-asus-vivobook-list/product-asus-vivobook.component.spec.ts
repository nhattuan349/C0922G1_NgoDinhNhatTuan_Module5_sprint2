import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsusVivobookComponent } from './product-asus-vivobook.component';

describe('ProductAsusVivobookComponent', () => {
  let component: ProductAsusVivobookComponent;
  let fixture: ComponentFixture<ProductAsusVivobookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAsusVivobookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAsusVivobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

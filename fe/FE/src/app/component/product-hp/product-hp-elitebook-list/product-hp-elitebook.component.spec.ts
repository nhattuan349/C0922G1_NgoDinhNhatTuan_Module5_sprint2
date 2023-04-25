import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHpElitebookComponent } from './product-hp-elitebook.component';

describe('ProductHpElitebookComponent', () => {
  let component: ProductHpElitebookComponent;
  let fixture: ComponentFixture<ProductHpElitebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHpElitebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHpElitebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

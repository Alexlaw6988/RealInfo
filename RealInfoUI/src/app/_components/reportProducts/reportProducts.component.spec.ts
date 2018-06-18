import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductsComponent } from './reportProducts.component';

describe('ReportProductsComponent', () => {
  let component: ReportProductsComponent;
  let fixture: ComponentFixture<ReportProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

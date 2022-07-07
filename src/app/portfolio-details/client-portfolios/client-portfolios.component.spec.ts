import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLientPortfoliosComponent } from './client-portfolios.component';

describe('CLientPortfoliosComponent', () => {
  let component: CLientPortfoliosComponent;
  let fixture: ComponentFixture<CLientPortfoliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLientPortfoliosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLientPortfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

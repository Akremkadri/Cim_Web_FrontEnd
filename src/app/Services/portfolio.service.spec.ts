import { TestBed } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';






const baseUrl = 'http://localhost:3000/Clients' ;


describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

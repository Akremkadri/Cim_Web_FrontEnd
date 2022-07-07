import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Portfolio } from '../Models/portfolio'; 
import { PortfolioService } from '../Services/portfolio.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit  {
  cols!: any[];
  data = { color: "#FFFFFF" };

  constructor(private portfolioService: PortfolioService ) { }


  public Portfolio!: Portfolio[];
  first: number = 0;


  ngOnInit(): void {
    this.portfolioService.findAllPortfolios().subscribe((res: Portfolio [])=>{
      this.Portfolio = res;
      this.cols = [
        { field: 'PORTFOLIONO', header: 'ID' },
        { field: 'BEZEICHNUNG', header: 'DESCRIPTION' },
        { field: 'KUNDENKATEGORIE_CD', header: 'Category' },
        { field: 'CRTUSER', header: 'Admin' },
        { field: 'MANAGEMENTTYP_CD', header: 'Management Type' },
        { field: 'MANAGER1_CD', header: 'Manager' } ];
    });
  }
  reset() {
    this.first = 0;
}

}

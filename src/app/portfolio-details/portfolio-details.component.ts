import { Component, OnInit } from '@angular/core';


class NavLink {
  constructor(public path: string, public label: string) {}
}
@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  navLinks: NavLink[] = [];
  constructor() { }

  ngOnInit(): void {
    this.navLinks = [
      new NavLink('addportfolio', 'Add Portfolio'),
      new NavLink('clientportfolio', 'Client Portfolios'),
      new NavLink('updateportfolio', 'Update Portfolio')
    ];
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { AddPortfolioComponent } from './portfolio-details/add-portfolio/add-portfolio.component';
import { CLientPortfoliosComponent } from './portfolio-details/client-portfolios/client-portfolios.component';
import { UpdatePortfolioComponent } from './portfolio-details/update-portfolio/update-portfolio.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent  , pathMatch: 'full'},
  { path: 'register', component: RegisterComponent , pathMatch: 'full'},
  { path : 'Client', component:ClientComponent, pathMatch: 'full'},
  { path : 'Portfolio' , component:PortfolioComponent , pathMatch: 'full'},
  { path: 'home', component:HomeComponent , pathMatch: 'full'},
  { path :'PortfolioDetails' , component:PortfolioDetailsComponent , pathMatch: 'full'},
  { path :'PortfolioDetails/addportfolio' , component:AddPortfolioComponent , pathMatch: 'full'},
  { path :'PortfolioDetails/clientportfolio' , component:CLientPortfoliosComponent , pathMatch: 'full'},
  { path :'PortfolioDetails/updateportfolio' , component:UpdatePortfolioComponent , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {DockModule} from 'primeng/dock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  dockItems: MenuItem[] = []; 


  ngOnInit(): void {
    this.dockItems = [
      {
          label: 'Home',
          icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
          routerLink : '/Home'
      },
      {
          label: 'Login',
          icon: "https://pic.onlinewebfonts.com/svg/img_311846.png",
          routerLink : '/login'
      },
      {
          label: 'Register',
          icon: "http://cdn.onlinewebfonts.com/svg/img_532221.png",
          routerLink : '/register'

      },
      {
          label: 'Log out',
          icon: "http://cdn.onlinewebfonts.com/svg/img_284036.png",
          routerLink : "/logout", 
  
      }
  ];

  }

}

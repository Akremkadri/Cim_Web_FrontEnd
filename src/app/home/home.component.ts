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
   

  }

}

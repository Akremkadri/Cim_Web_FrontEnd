import { NgModule , CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientComponent } from './client/client.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import {DockModule} from 'primeng/dock';
import {TableModule} from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ClientToolbarComponent } from './client-toolbar/client-toolbar.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CalendarModule } from "primeng/calendar";


import { MatButtonModule } from 
    '@angular/material/button';
import { MatButtonToggleModule } from 
    '@angular/material/button-toggle';
import { MatDatepickerModule } from 
    '@angular/material/datepicker';
import { MatInputModule } from 
    '@angular/material/input';
import { MatFormFieldModule } from 
    '@angular/material/form-field';
import { MatNativeDateModule } from 
    '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ToolbarComponent,
    ClientComponent,
    PortfolioComponent,
    HomeComponent,
    AddClientComponent,
    UpdateComponentComponent,
    SidebarComponent,
    SearchClientComponent,
    DynamicTableComponent,
    ClientToolbarComponent
    
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule, 
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');}
      }
    }),
    DockModule,
    TableModule,
    SplitButtonModule,
    ButtonModule,
    ToolbarModule,
    DynamicDialogModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    FormsModule, 
    NgxPaginationModule,
    MatDatepickerModule,
    CalendarModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatInputModule,
    MatFormFieldModule ,
    MatButtonToggleModule ,
    MatButtonModule
  ],
  entryComponents: [  
    AddClientComponent,
    UpdateComponentComponent,
    SidebarModule
  ],  
  providers: [{
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: true,
      backdropClass: 'modal-backdrop',
      closeOnNavigation: true,
    },
  },],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }

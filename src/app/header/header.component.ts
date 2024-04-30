

//import { initMDB,Collapse, Dropdown } from 'mdb-angular-ui-kit';
import { Component, OnInit, HostBinding } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbNavItem } from '@ng-bootstrap/ng-bootstrap';

import { NgIf } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { RouterLink } from '@angular/router';


import {MatIconModule} from '@angular/material/icon';




import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Materials
//import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@Component({
  selector: 'app-header',
  standalone: true,
  providers: [AuthService],
  imports: [MatInputModule, MatCardModule, MatMenuModule, MatButtonModule, MatTableModule, MatSliderModule,MatSlideToggleModule,  MatToolbarModule, MatOptionModule,  MatSelectModule, NgbNavItem, NgIf, RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    //Username
    constructor(public authService: AuthService, private router : Router){}

    title = 'Bookshop';
    public loggedUser !: string;
    public isloggedIn: Boolean = /*localStorage.getItem("isLoggedIn") === "true"*/false;
    public AdminOrUser !: string;


    ngOnInit () : void {
      /*let isloggedin : string | null;
      let loggedUser : string | null;
      let AdminOrUser : string | null;
      isloggedin = localStorage.getItem('isloggedIn');
      loggedUser = localStorage.getItem('loggedUser');
      AdminOrUser = localStorage.getItem('AdminOrUser');*/
      //if (isloggedin!="true" || !loggedUser || !AdminOrUser )
      //this.router.navigate(['/login']);
      //else
      //this.authService.setLoggedUserFromLocalStorage(loggedUser , AdminOrUser);
    
    
    
    //console.log(this.authService.loggedUser+ localStorage.getItem("loggedUser"));
    
    /*const storedUser = localStorage.getItem("loggedUser");*/
    /*this.loggedUser = typeof storedUser === "string" ? storedUser : "";*/
    //this.loggedUser = localStorage.getItem("loggedUser") || "";

    if (typeof localStorage !== 'undefined') {
      var storedValue1 = localStorage.getItem("loggedUser");
      if (typeof storedValue1 === "string") {
        this.loggedUser = storedValue1;
      } else {
        this.loggedUser = "";
      }
    } else {
      // Handle the case where localStorage is not available
      this.loggedUser = ""; // or any other fallback value
    }



    //this.isloggedIn = localStorage.getItem("isLoggedIn") !== null ? true : false;
    if (typeof localStorage !== 'undefined') {
      this.isloggedIn = localStorage.getItem("isLoggedIn") === "true";
    } else {
      // Handle the case where localStorage is not available
      // For example, you might set isloggedIn to a default value
      this.isloggedIn = false;
    }



    //this.AdminOrUser = localStorage.getItem("AdminOrUser") || "";
    if (typeof localStorage !== 'undefined') {
      var storedValue2 = localStorage.getItem("AdminOrUser");
      if (typeof storedValue2 === "string") {
        this.AdminOrUser = storedValue2;
      } else {
        this.AdminOrUser = "";
      }
    } else {
      // Handle the case where localStorage is not available
      this.AdminOrUser = ""; // or any other fallback value
    }

      }
      
      onLogout(){
      this.authService.logout();
      }
}

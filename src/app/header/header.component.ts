

//import { initMDB,Collapse, Dropdown } from 'mdb-angular-ui-kit';
import { Component, OnInit, HostBinding } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbNavItem } from '@ng-bootstrap/ng-bootstrap';

import { NgIf } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  standalone: true,
  providers: [AuthService],
  imports: [MatSliderModule, MatToolbarModule, NgbNavItem, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    //Username
    constructor(public authService: AuthService, private router : Router){}

    ngOnInit () {
      let isloggedin : string | null;
      let loggedUser : string | null;
      let AdminOrUser : string | null;
      isloggedin = localStorage.getItem('isloggedIn');
      loggedUser = localStorage.getItem('loggedUser');
      AdminOrUser = localStorage.getItem('AdminOrUser');
      //if (isloggedin!="true" || !loggedUser || !AdminOrUser )
      //this.router.navigate(['/login']);
      //else
      //this.authService.setLoggedUserFromLocalStorage(loggedUser , AdminOrUser);
    
    
    
    
    
    

      }
      
      onLogout(){
      this.authService.logout();
      }
}

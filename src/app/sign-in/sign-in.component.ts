import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

import { HeaderComponent } from '../header/header.component';

import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatCardModule, HeaderComponent, RouterOutlet, MdbCarouselModule, CommonModule, FormsModule, ReactiveFormsModule, ImageSliderComponent, MatSlideToggleModule, NgbCarouselModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  hide = true;

  

  public loginValid = true;

  client = new User();

  constructor(private authService : AuthService,
    private router: Router,
    //ERROR TEST
    ///////////////////////////////////
    private formBuilder : FormBuilder,
    private route : ActivatedRoute
    //ERROR TEST
    ){
      //////////////////////Prevent logged user from login in page reload
      if (this.authService.isAdmin()) {this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });;}
    }

    
  ngOnInit(): void {
  }

/////////////////////////////////////////////////////////////////////////
  onLoggedin() {

    this.loginValid = true;
    this.authService.getUserFromDB(this.client.email).subscribe((usr: User) => {

if (usr == null){console.log("faux"); this.loginValid = false;}
else{
      if (usr.password == this.client.password) {
        this.authService.SignIn(usr);

        //this.router.navigate(['/']);
        setTimeout(() => {this.router.navigate(['/home'],).then(() => {
          window.location.reload();
        });}, 570);
      }
      else{console.log(usr);this.loginValid = false;}
      
}
    });
  }
/////////////////////////////////////////////////////////////////////////


}

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';
import { Router, RouterOutlet } from '@angular/router';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

import { HeaderComponent } from '../header/header.component';

import {MatCardModule} from '@angular/material/card';



import { AuthService } from '../services/auth.service';


import { User } from '../models/user.model';
import { Role } from '../models/user.model';

import {MatDividerModule} from '@angular/material/divider';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatButtonModule,MatDividerModule, MatFormFieldModule, MatCardModule, HeaderComponent, RouterOutlet, MdbCarouselModule, CommonModule, FormsModule, ReactiveFormsModule, ImageSliderComponent, MatSlideToggleModule, NgbCarouselModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];

  users !: User[]; //un tableau de User

newUser = new User();



roles !: Role[];

newIdRole !: number;

newRole !: Role;

  constructor(private authService : AuthService,
    private router : Router,) { }

  ngOnInit(): void {

 this.authService.listeRoles().subscribe(rols => {
  console.log(rols);
  this.roles = rols;
});
this.authService.listeUsers().subscribe(usrs => {
  console.log(usrs);
  this.users = usrs;
});
  }

//////////////////////////////////////////////////////

   addUser() {
    //this.authService.consulterRole(this.newIdRole).subscribe((r : Role)=> {this.newRole = r;  /*console.log(r);*/ });
    //this.newUser.role = this.newRole;
    console.log(this.newIdRole);
    console.log("no", this.newUser);
    //this.newUser.enabled = true;
   
   
    this.authService.consulterRole(2).subscribe( liv =>{
       this.newUser.role = liv;  
       this.newUser.enabled = true;
         this.authService.ajouterUser(this.newUser).subscribe(usr => { console.log(usr); });

         //this.router.navigate(['/users']);
         setTimeout(() => {this.router.navigate(['/login'],).then(() => {
          window.location.reload();
        });}, 570);
         /*this.router.navigate(['/users']).then(() => {
                                                       window.location.reload();
                                                     });*/
       
       
       
       
       
       
       } ) ;
   
   
    
   }


}

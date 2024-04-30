import { Component, OnInit } from '@angular/core';

import { NgIf } from '@angular/common';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Role } from '../models/role.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

import { User } from '../models/user.model';

import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgClass ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  

  //ERROR TEST
  loginForm !: FormGroup;
  loading = false;
  submitted = false;
  //ERROR TEST


  /*
    iduser !: number;
    username !: string ;
    email !: string ;
    password !: string;
    enabled !: boolean;
    role !: Role;
  */
  user = new User();
  erreur=0;

  constructor(private authService : AuthService,
              private router: Router,
              //ERROR TEST
              ///////////////////////////////////
              private formBuilder : FormBuilder,
              private route : ActivatedRoute
              //ERROR TEST
              ) {
                //ERROR TEST
                //////////////////////Prevent logged user from login in page reload
                if (this.authService.isAdmin()) {this.router.navigate(['/ColorGame']).then(() => {
                  window.location.reload();
                });;}
                //ERROR TEST
                }

  ngOnInit(): void {
                //ERROR TEST
                this.loginForm = this.formBuilder.group({
                  email : ['', [Validators.required, Validators.minLength(6), Validators.email]],
                  password : ['', [Validators.required, Validators.minLength(5)]]
                });
                /*this.loginForm.setValue({ 
                  email : '',
                  password: ''
                });*/
                //ERROR TEST
  }


  //ERROR TEST
  get f() {return this.loginForm.controls;}
  get mail() {return this.loginForm.get('email');}
  get pass() {return this.loginForm.get('password');}
  //ERROR TEST



  onSubmit() {
    this.loading = true;
    this.submitted = true;

    console.log(this.loginForm.get('password')?.hasError('required'));
    console.log(this.loginForm.get('password'));
    //Stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }


    this.onLoggedin();
    this.loading = false;

  }
  //ERROR TEST





  

  onLoggedin() {

    console.log(this.user.password);
    this.authService.consulterUserByEmail(this.user.email).subscribe( usr =>{
      this.user = usr; console.log(usr);console.log(this.user);/*console.log('fvvdsgs',usr);*/ 
    
      this.loading = true;
      this.authService.SignIn(this.user);
      this.erreur = 0;
      setTimeout(() => {this.router.navigate(['/home'],).then(() => {
        window.location.reload();
      });}, 1270);
    
    
    }  ) ;
    //this.authService.login(this.user).subscribe({
    //  next: (data) => {
//
//
    //    this.authService.consulterUserByEmail(this.user.email).
    //    subscribe( usr =>{
    //    this.user = usr; console.log(usr);console.log(this.user);/*console.log('fvvdsgs',usr);*/ 
    //  
    //    this.loading = true;
    //    this.authService.SignIn(this.user);
    //    this.erreur = 0;
    //    setTimeout(() => {this.router.navigate(['/livres'],)}, 1270);
    //  
    //  
    //  }  ) ;
//
    //    /*console.log(this.user);
    //    let rrr = new Role();
    //    rrr.idRole = 1;
    //    rrr.nomRole = "Admin";
    //    this.user.role = rrr;
    //    this.user.username="Profil";
    //    this.user.email ="speed@gmail.com";
    //    this.user.enabled = true;*/
//
    //    console.log(this.user.password );
    //    //this.user.role.idRole=1;
    //    //this.user.role.nomRole="Admin";
    //    /*this.loading = true;
    //    this.authService.SignIn(this.user);
    //    this.erreur = 0;*/
    //    
    //    //this.router.navigate(['/']);
    //    /*setTimeout(() => {this.router.navigate(['/users'],)}, 1270);*/
    //  },
    //  error: (err: any) => {
    //    this.erreur = 1;
    //  }
    //});
  }



///////////////////////////////////////////////////////////////////////////////
/*
  onLoggedin() {
    this.authService.getUserFromDB(this.user.email).subscribe((usr: User) => {
      if (usr.password == this.user.password) {
        this.authService.SignIn(usr);
        this.erreur = 0;
        this.loading = true;
        //this.router.navigate(['/']);
        setTimeout(() => {this.router.navigate(['/users'],)}, 1270);
      }
      else
        this.erreur = 1;
    }, (err) => console.log(err));
  }
*/
///////////////////////////////////////////////////////////////////////////////


  //livre

  /*onLoggedin() 
  {
    this.authService.getUserFromDB(this.user.username).subscribe((usr: User) => {
      if (usr.password == this.user.password) {
        this.authService.SignIn(usr);
        this.erreur = 0;
        this.router.navigate(['/']);
      }
      else
        this.erreur = 1;
    }, (err) => console.log(err));*/

    /*
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1;*/
  /////////}








  //Color

    //user test
  /*onLoggedin(){
    console.log(this.loginForm.getRawValue());
    console.log(this.user);
    console.log(this.loginForm.get('password'));
    console.log(this.loginForm.controls);
    //console.log(this.loginForm.controls.password.value);
    
    //ERROR TEST
    //this.user.email = this.f.email.value;
    //this.user.password = this.f.password.value;

    let isValidUser: Boolean = this.authService.SignIn(this.user);
    
    
    //if (this.authService.VideEmail(this.user)) this.longeurEmail = 0;
    if (isValidUser){
      this.erreur = 0;
      this.loading =false;
      /////////////////////////////After success login go to ColorGame
      this.router.navigate(['/']);
    }
      
    else
    this.erreur = 1;
      //alert('Login ou mot de passe incorrecte!');
    

  }*/


}

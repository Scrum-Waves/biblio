import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';

//ERROR TEST
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
//ERROR TEST


@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {

  //ERROR TEST
  loginForm !: FormGroup;
  
  submitted = false;
  //ERROR TEST
  
  newUser = new User();
  
  submittted !: number;
  
  //Role
  roles !: Role[];
  updatedRole !: Role;


//////////////////////////////////////////////////////////////////////////////////
  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private authService: AuthService,
              //ERROR TEST
              private formBuilder : FormBuilder
              //ERROR TEST
              ) { }
//////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
  
    //ERROR TEST
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      role: [null, [Validators.required]]
    });
    //ERROR TEST
    this.submittted = 0;
  
  //Role
  this.authService.listeRoles().subscribe(rols => {
  console.log(rols);
  this.roles = rols;
  });
  
  //User
  console.log(this.activatedRoute.snapshot.params['id']);
  //console.log(this.route.snapshot.params.id);
  this.authService.consulterUser(this.activatedRoute.snapshot.params['id']).
  subscribe( usr =>{ this.newUser = usr; /*console.log('fvvdsgs',usr);*/ }  ) ;
  //console.log('nnnnnn',this.currentUser);
  }
//////////////////////////////////////////////////////////////////////////////////

      //ERROR TEST
      get f() {return this.loginForm.controls;}
      get name() {return this.loginForm.get('username');}
      get mail() {return this.loginForm.get('email');}
      get pass() {return this.loginForm.get('password');}
      get ro() {return this.loginForm.get('role');}
      //ERROR TEST


//////////////////////////////////////////////////////////////////////////////////
  updateUser() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }


    this.authService.updateUser(this.newUser).subscribe(usr => {
    //this.router.navigate(['/users']);
    },(error) => { alert("Problème lors de la modification !"); }
    );



    this.submittted = 1;
    setTimeout(() => {this.router.navigate(['/users'],).then(() => {
      window.location.reload();
    });}, 3000);
    //this.router.navigate(['/users']);
    /*this.router.navigate(['/users']).then(() => {
      window.location.reload();});*/

  }
}

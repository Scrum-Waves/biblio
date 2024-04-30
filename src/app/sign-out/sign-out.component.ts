import { AuthService } from "../services/auth.service";
import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.css'
})
export class SignOutComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.logout();
  }


}

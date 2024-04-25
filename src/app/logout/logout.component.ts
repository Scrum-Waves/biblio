import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  
  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.logout();
  }

}

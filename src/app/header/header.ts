import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
session!: boolean;
constructor(private auth: AuthService, private router: Router){
  this.auth.isAuthenticated().subscribe(session => this.session = session);
}

Logout(){
  this.auth.logout();
  this.router.navigateByUrl('/login')
}

today = new Date();

}

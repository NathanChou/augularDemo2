import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { 
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}

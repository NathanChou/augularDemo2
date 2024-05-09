
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public userName: string="";
  public password: string="";
  rUrl: string="";
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {    
    var url = decodeURI(this.router.url);
    console.log(url);
    var idx = url.toLowerCase().indexOf("rurl=");
    if (idx >= 0)
      this.rUrl = "/" + url.substring(idx + 5);
    console.log(this.rUrl);

  }

  onLogin() {
    console.log(`${this.userName} / ${this.password}`)
    this.authService.login(this.userName, this.password).subscribe(
      data => {
        // console.log("IsAuth:" + data);
        console.log($localize`是否驗證?${data}`);
        if (this.rUrl && this.rUrl.length > 0)
          this.router.navigate([this.rUrl]);
        else {
          this.router.navigate(['/']);
        }
      }
    );
  }


}

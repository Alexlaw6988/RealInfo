import { Component, OnInit } from '@angular/core';
import { loginModel } from '../../_models/models';
import { AccountService } from '../../_services/services';
import { AppStorageService } from '../../_storage/appStorage.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  model: loginModel;
  token:any;
  constructor(private actService: AccountService, private Appstorage: AppStorageService, private cookieService: CookieService,private router: Router) { }

  ngOnInit() {

    this.Appstorage.ClearAll();
    this.cookieService.deleteAll();
    this.model = new loginModel();
  }

  login() {
    this.actService.login(this.model).subscribe( data => {
      this.model = new loginModel();
      console.log("test");
      this.router.navigate(['dashboard']);
     });
    
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerModel, loginModel } from '../_models/models';
import { Subject } from 'rxjs';
import { AppStorageService } from '../_storage/appStorage.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userName = new Subject<string>();

  userName$ :any;

  constructor(private http: HttpClient, private Appstorage: AppStorageService, private cookieService: CookieService) {
    this.userName$ = this.userName.asObservable();


    let token = this.cookieService.get("USER_COOKIE");

    if(token){
      token = JSON.parse(this.cookieService.get("USER_COOKIE"));
      this.Appstorage.AddItem("Authentication", token);
      this.userName.next(token['userName']);
      
    }
    
    console.log(this.Appstorage.GetItem("Authentication"));
    console.log(this.cookieService.get("USER_COOKIE"));
   }

  login(model: loginModel) {
 
    let data = 'username=' + model.UserName + '&password=' + model.Password + '&grant_type=password';

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    this.http.post('/token', data, { headers: reqHeader }).subscribe((res) => {
      let token = res;
      this.Appstorage.AddItem("Authentication", token);
      this.cookieService.set("USER_COOKIE",JSON.stringify(token));
      this.userName.next(token['userName']);
      console.log(token);
      

    }, (err) => { console.log(err); });

    return this.userName$;
  }

  register(model: registerModel) {

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this.http.post('/api/Account/Register', model, { headers: reqHeader });
  }

  logOff(){
    this.cookieService.deleteAll();
    this.Appstorage.RemoveItem("Authentication");
    this.userName.next(undefined);
  }
}


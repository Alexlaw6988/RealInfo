import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerModel, loginModel } from '../_models/models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(model : loginModel) {

    alert('login');

    let data = 'username=' + model.UserName + '&password=' + model.Password + '&grant_type=password';

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this.http.post('/token', data, { headers: reqHeader });
  }

  register(model: registerModel) {   

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this.http.post('/token', model, { headers: reqHeader });
  }
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(userName, password) {
    let data = 'username=' + userName + '&password=' + password + '&grant_type=password';

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this.http.post('/token', data, { headers: reqHeader });
  }

  register(userName, password) {
    let data = 'username=' + userName + '&password=' + password + '&grant_type=password';

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this.http.post('/token', data, { headers: reqHeader });
  }
}


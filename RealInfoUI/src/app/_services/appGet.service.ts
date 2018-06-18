import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoverDate } from '../_models/models';
import { Subject } from 'rxjs';
import { AppStorageService } from '../_storage/appStorage.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppGetService {

  constructor(private http: HttpClient, private Appstorage: AppStorageService, private cookieService: CookieService) { }

  getAllCartDates() {

    return this.http.get('/api/app/getCoverDates');


  }
}

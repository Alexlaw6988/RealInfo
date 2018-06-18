import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AppStorageService } from '../_storage/appStorage.service';
import { CookieService } from 'ngx-cookie-service';
import { PropertySearchOwnerName, PropertySearchTax, PropertySearchAddress } from '../_models/models';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient, private Appstorage: AppStorageService, private cookieService: CookieService) { }

  PropertySearchByOwnerName (model: PropertySearchOwnerName) {

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this.http.post('/api/app/getProperties', model, { headers: reqHeader });
  }

  PropertySearchByTax (model: PropertySearchTax) {

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this.http.post('/api/app/getPropertiesbyTax', model, { headers: reqHeader });
  }

  PropertySearchByAdd (model: PropertySearchAddress) {

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this.http.post('/api/app/getPropertiesbyAddress', model, { headers: reqHeader });
  }

}

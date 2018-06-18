import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { error } from 'util';
import { AppStorageService } from '../_storage/appStorage.service';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Injectable()
export class realInfoHttpInterceptor implements HttpInterceptor {

    constructor(private route: Router, private Appstorage: AppStorageService, private spinner: SpinnerVisibilityService) { }


    //Intercept every incoming request
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("intercepted request ... ");
        //this.spinner.show();

        // Clone the request to add the new header. //adding the service header to the requestF
        request = request.clone({ headers: this.addRequestHeaders(), withCredentials: true });

        console.log("Sending request with new header now ...");

        //send the newly created request
        return next.handle(request);
    }

    /**
     * Add header to the request
     */
    addRequestHeaders() {
        const headers = new HttpHeaders();
        if (this.Appstorage.ContainsKey('Authentication')) {

            let auth = this.Appstorage.GetItem('Authentication');
            headers.append("Authorization", "Bearer" + auth['access_token']);
        }

        headers.append('Content-Type', 'application/json');
        return headers;
    }

}
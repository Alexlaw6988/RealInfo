import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/services';
import { AppStorageService } from '../../_storage/appStorage.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  userName : string;

  constructor(private actService: AccountService, private Appstorage:AppStorageService, private cookieService: CookieService,private router: Router) {

    if(this.Appstorage.ContainsKey("Authentication")){
      this.userName = this.Appstorage.GetItem("Authentication")['userName'];
    }
   }

  ngOnInit() {
   
    this.actService.userName$.subscribe((data)=>{
     
        this.userName = data;
     
     
    });
    console.log(this.userName);
  }

  logOff(){
    this.actService.logOff();    
    this.router.navigate(['login']);
    console.log(this.userName);
  }

}

import { Component, OnInit } from '@angular/core';
import { AppGetService } from '../../_services/services';
import { CoverDate } from '../../_models/models';
import { AppStorageService } from '../../_storage/appStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  coverDateList: CoverDate[];
  token: any;
  constructor(private route: Router, private Appservice: AppGetService, private Appstorage: AppStorageService) { }

  ngOnInit() {

    let api = this.Appservice.getAllCartDates();
    api.subscribe(res => { this.coverDateList = res as CoverDate[]; console.log(res) }, err => { console.log(err) });
  }

  selectProduct(data: CoverDate) {
    this.Appstorage.AddItem('CoverDate', data);
    this.route.navigate(['selectProduct']);
  }

}

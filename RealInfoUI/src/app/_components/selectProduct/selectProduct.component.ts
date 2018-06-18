import { Component, OnInit } from '@angular/core';
import { CoverDate, PropertySearchOwnerName, PropertySearchTax, PropertySearchAddress, Property } from '../../_models/models';
import { AppStorageService } from '../../_storage/appStorage.service';
import { PropertyService } from '../../_services/services';

@Component({
  selector: 'app-select-product',
  templateUrl: './selectProduct.component.html',
  styleUrls: ['./selectProduct.component.css']
})
export class SelectProductComponent implements OnInit {

  coverDate: CoverDate;
  searchPD: string;
  searchPH: string;
  searchTitle: string;
  searchCriteria: string;
  searchResult: boolean;
  error: string;
  modelON: PropertySearchOwnerName;
  modelTax: PropertySearchTax;
  modelAdd: PropertySearchAddress;
  schema: string;
  searchResults: Property[];
  constructor(private Appstorage: AppStorageService, private appService: PropertyService) {

  }

  ngOnInit() {
    console.log(this.Appstorage);
    this.searchTitle = "";
    if (this.Appstorage.ContainsKey('CoverDate')) {
      this.coverDate = this.Appstorage.GetItem('CoverDate');
    }
    this.searchResult = false;
    this.schema = this.coverDate.County.replace('IL_', '');
  }
  continuePD() {

    console.log(this.searchPD);
    this.error = "";
    if (this.searchPD) {
      this.searchTitle = "> Property Detail > " + this.searchPD + ' Search';
      this.searchCriteria = 'PD';
      if (this.searchPD == 'Owner Name') {
        this.modelON = new PropertySearchOwnerName();
        this.modelON.schema = this.schema;
      }

      if (this.searchPD == 'Tax Number') {
        this.modelTax = new PropertySearchTax();
        this.modelTax.schema = this.schema;
      }

      if (this.searchPD == 'Property Address') {
        this.modelAdd = new PropertySearchAddress ();
        this.modelAdd.schema = this.schema;
      }
    }
    else {
      this.error = "Please select any of search by criteria";
    }
  }

  continuePH() {
    console.log(this.searchPH);
    this.error = "";
    if (this.searchPH) {
      this.searchTitle = "> Property History > " + this.searchPH + ' Search';
      this.searchCriteria = 'PH';
      if (this.searchPH == 'Owner Name') {
        this.modelON = new PropertySearchOwnerName();
        this.modelON.schema = this.schema;
      }

      if (this.searchPH == 'Tax Number') {
        this.modelTax = new PropertySearchTax();
        this.modelTax.schema = this.schema;
      }

      if (this.searchPH == 'Property Address') {
        this.modelAdd = new PropertySearchAddress ();
        this.modelAdd.schema = this.schema;
      }
    }
    else {
      this.error = "Please select any of search by criteria";
    }
  }

  continueOD() {
    alert('OD');
  }

  onSubmit() {

    
      if (this.searchPD == 'Owner Name' || this.searchPH == 'Owner Name') {
        this.appService.PropertySearchByOwnerName(this.modelON)
          .subscribe(
            (data) => {
              this.searchResults = data as Property[];
              console.log(data);
              this.searchResult = true;
            },
            (err) => {
              console.log(err);
            });
      }
     else if (this.searchPD == 'Tax Number' || this.searchPH == 'Tax Number') {
        this.appService.PropertySearchByTax(this.modelTax)
          .subscribe(
            (data) => {
              this.searchResults = data as Property[];
              console.log(data);
              this.searchResult = true;
            },
            (err) => {
              console.log(err);
            });
      }
      else if (this.searchPD == 'Property Address' || this.searchPH == 'Property Address') {
        this.appService.PropertySearchByAdd(this.modelAdd)
          .subscribe(
            (data) => {
              this.searchResults = data as Property[];
              console.log(data);
              this.searchResult = true;
            },
            (err) => {
              console.log(err);
            });
      }
    


  }

}

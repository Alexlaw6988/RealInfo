import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/services';
import { loginModel } from '../_models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  model: loginModel;
  token:any;
  constructor(private actService: AccountService) { }

  ngOnInit() {

    this.model = new loginModel();
    this.token = "";
  }

  login() {
    alert('submit');
    this.actService.login(this.model).subscribe( data => {
      this.token = data;
      console.log(this.token);
    });;
    
  }

}

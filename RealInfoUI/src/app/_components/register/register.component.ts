import { Component, OnInit } from '@angular/core';
import { registerModel } from '../../_models/models';
import { AccountService } from '../../_services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  model:registerModel;
  constructor(private accountApi : AccountService,private router: Router) {
    this.model = new registerModel();
   }

  ngOnInit() {
  }

  onSubmit(){
    let api = this.accountApi.register(this.model);
    api.subscribe(res=>{this.router.navigate(['scucessRegisteration']);console.log(res)},err=>{console.log(err)})
  }

}

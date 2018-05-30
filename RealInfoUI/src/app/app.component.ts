import { Component } from '@angular/core';
import { AccountService } from './_services/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private actService : AccountService){

  }

  
}

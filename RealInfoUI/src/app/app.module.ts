
/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Custom Modules */
import { routing } from 'src/app/_routing/routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

/*Services */
import { AccountService} from './_services/services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavmenuComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

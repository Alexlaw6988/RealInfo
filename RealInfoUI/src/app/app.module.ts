
/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* Custom Modules */
import { routing } from 'src/app/_routing/routing.module';

/* Components */
import { AppComponent } from './app.component';
import {
  HomeComponent,
  AboutComponent,
  ReportProductsComponent,
  ListproductsComponent,
  CoverageComponent,
  PricingComponent,
  ContactComponent,
  LoginComponent,
  RegisterComponent,
  SuccessregComponent,
  PageNotFoundComponent,
  HeaderComponent,
  FooterComponent,
  NavmenuComponent,
  SelectProductComponent,
  SearchProductComponent
} from './_components/components';

/*Services */
import { AccountService, AppGetService,PropertyService } from './_services/services';
import { CookieService } from 'ngx-cookie-service';

/*Directives */
import { EqualValidator } from './_directives/directives';

/* http Interceptor */
import { realInfoHttpInterceptor } from './_interceptors/realInfoHttpInterceptor';

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
    EqualValidator,
    AboutComponent,
    ReportProductsComponent,
    ListproductsComponent,
    CoverageComponent,
    PricingComponent,
    ContactComponent,
    SuccessregComponent,
    SelectProductComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    routing
  ],
  providers: [AccountService, AppGetService, CookieService,PropertyService, {
    provide: HTTP_INTERCEPTORS,
    useClass: realInfoHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

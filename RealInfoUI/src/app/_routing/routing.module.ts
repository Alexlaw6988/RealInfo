import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  SelectProductComponent,
  SearchProductComponent
} from '../_components/components';

const appRoutes: Routes =
  [
    { path: 'dashboard', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'report', component: ReportProductsComponent },
    { path: 'products', component: ListproductsComponent },
    { path: 'coverage', component: CoverageComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'selectProduct', component: SelectProductComponent },    
    { path: 'searchProduct', component: SearchProductComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },    
    { path: 'scucessRegisteration', component: SuccessregComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

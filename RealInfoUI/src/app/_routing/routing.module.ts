import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { PageNotFoundComponent } from 'src/app/pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const appRoutes: Routes =
  [
    { path: 'home', component: HomeComponent },
    { path: 'home/login', component: LoginComponent },
    { path: 'home/register', component: RegisterComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

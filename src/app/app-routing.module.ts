import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from  './home/home.component';
import { ClosetComponent } from  './closet/closet.component';
import { HamperComponent } from  './hamper/hamper.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
    },
    {
    path:  'home',
    component:  HomeComponent
    },
    {
    path:  'closet',
    component:  ClosetComponent
    },
    {
    path:  'hamper',
    component:  HamperComponent
    },
    { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

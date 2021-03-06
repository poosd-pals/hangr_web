import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from  './home/home.component';
import { ClosetComponent } from  './closet/closet.component';
import { HamperComponent } from  './hamper/hamper.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { OutfitsComponent } from './outfits/outfits.component';

import { ListComponent } from './closet/list/list.component';
import { UploadComponent } from './closet/upload/upload.component';

import { AuthGuard } from  './auth/auth.guard';

const routes: Routes = [
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'register',
    component: RegisterComponent
    },
    {
    path:  'home',
    component:  HomeComponent,
    canActivate: [AuthGuard]
    },
    { 
      path: '',
      redirectTo: '/about',
      pathMatch: 'full'
    },
    {
      path:  'outfits',
      component:  OutfitsComponent,
      canActivate: [AuthGuard]
    },
    {
    path:  'hamper',
    component:  HamperComponent,
    canActivate: [AuthGuard]
    },
    {
    path:  'about',
    component:  AboutComponent
    },
    { 
      path: '**', 
      component: PagenotfoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

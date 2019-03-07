import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClosetComponent } from './closet/closet.component';
import { HamperComponent } from './hamper/hamper.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'closet', component: ClosetComponent },
  { path: 'hamper', component: HamperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

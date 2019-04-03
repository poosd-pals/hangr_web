import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

import { ListComponent } from  './list/list.component';
import { UploadComponent } from './upload/upload.component';
import { ClosetComponent } from './closet.component';
import { OutfitComponent } from './outfit/outfit.component';

import { AuthGuard } from  '../auth/auth.guard';

const  routes:  Routes  = [
{
path:  'closet',
component:  ClosetComponent,
canActivate: [AuthGuard],
children: [
    {
    path:  'list',
    component:  ListComponent
    },
    {
    path:  'upload',
    component:  UploadComponent
    }
]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export  class  ClosetRoutingModule { }
import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

import { ListComponent } from  './list/list.component';
import { UploadComponent } from './upload/upload.component';
import { ClosetComponent } from './closet.component';
import { OutfitComponent } from './outfit/outfit.component';

const  routes:  Routes  = [
{
path:  'closet',
component:  ClosetComponent,
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
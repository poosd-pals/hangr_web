import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';
import { OutfitComponent } from './outfit/outfit.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { ClosetRoutingModule } from './closet-routing.module';
import { MaterialModule } from '../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, UploadComponent, OutfitComponent, SidenavComponent],
  imports: [
    CommonModule,
    ClosetRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    MaterialModule
  ]
})
export class ClosetModule { }

import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';
import { OutfitComponent } from './outfit/outfit.component';
import { ClosetRoutingModule } from './closet-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipsInputComponent } from './upload/chips-input/chips-input.component';

@NgModule({
  declarations: [ListComponent, UploadComponent, OutfitComponent, ChipsInputComponent],
  imports: [
    CommonModule,
    ClosetRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    MaterialModule,
    MatInputModule
  ]
})
export class ClosetModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';
import { OutfitComponent } from './outfit/outfit.component';
import { ClosetRoutingModule } from './closet-routing.module';

@NgModule({
  declarations: [ListComponent, UploadComponent, OutfitComponent],
  imports: [
    CommonModule,
    ClosetRoutingModule
  ]
})
export class ClosetModule { }

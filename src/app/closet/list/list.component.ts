import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../api/api.service';
import { ClothingItem } from '../clothing-model';
import { Constants } from '../../constants/constants';

export interface Tag {
    name: string;
  }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

    // Booleans for tags.
    selectable = true;
    removable = true;

    // long text is the "add clothing" text when the button is expanded.
    addButtonLongText: boolean;

    // TO BE DELETED: Temporary array of tags.
    tags: Tag[] = [
        {name: 'Casual'},
        {name: 'Business'},
        {name: 'Summer'},
      ];

    // Set categories list to the ones defined in constants.
    categories = Constants.categories;

    // Empty array 'closet' of objects type 'ClothingItem'
    closet: ClothingItem[];

    // Constructor sets the api to the one in ApiService.
    constructor(private api: ApiService) {
        this.addButtonLongText = false;
    }

    // Returns data from firebase mapped to an array of objects type 'ClothingItem'
    ngOnInit() {
    this.api.getClothing().subscribe(data => {
        this.closet = data.map(e => {
            return {name: e.payload.doc.id,
                    ...e.payload.doc.data()
                } as ClothingItem;
            });
        });
    }

    // Function to remove tag.
    remove(tag: Tag): void {
        const index = this.tags.indexOf(tag);

        if (index >= 0) {
            this.tags.splice(index, 1);
            }
        }
}

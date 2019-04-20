import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../api/api.service';
import { ClothingItem } from '../clothing-model';

export interface Tag {
    name: string;
  }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

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

    // Empty array 'closet'.
    closet;

    // Hardcoded array of categories for sidenav.
    categories = ['Accessories', 'Bags', 'Dresses', 'Intimates & Sleepwear',
        'Jackets & Coats', 'Jeans', 'Jewelry', 'Pants', 'Shoes', 'Shorts', 'Skirts', 'Sweaters', 'Swim', 'Tops', 'Other'];

    constructor(private api: ApiService) {
        this.addButtonLongText = false;
    }

    remove(tag: Tag): void {
        const index = this.tags.indexOf(tag);

        if (index >= 0) {
          this.tags.splice(index, 1);
        }
      }

    ngOnInit() {
        this.api.getClothing();
    }

    getClothingItems = () =>
        this.api.getClothing().subscribe(res => (this.closet = res))



/*   ngOnInit() {
    this.api.getClothing().subscribe(clothing => {
        this.clothing = clothing;
        console.log(this.clothing);
    })
  } */
}

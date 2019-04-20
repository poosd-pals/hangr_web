import { Clothing } from './../clothing';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api/api.service';

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
    clothing: Object;

    // TO BE DELETED: Temporary array of tags.
    tags: Tag[] = [
        {name: 'Casual'},
        {name: 'Business'},
        {name: 'Summer'},
      ];

    // Empty array 'closet'.
    closet: any[] = [];

    // Hardcoded array of categories for sidenav.
    categories = ['Accessories', 'Bags', 'Dresses', 'Intimates & Sleepwear',
        'Jackets & Coats', 'Jeans', 'Jewelry', 'Pants', 'Shoes', 'Shorts', 'Skirts', 'Sweaters', 'Swim', 'Tops', 'Other'];

    constructor(private api: ApiService) {
        this.addButtonLongText = false;

        // Populates closet with call to api getClothing.
        this.closet = this.api.getClothing();
    }

    remove(tag: Tag): void {
        const index = this.tags.indexOf(tag);

        if (index >= 0) {
          this.tags.splice(index, 1);
        }
      }

    ngOnInit() {}

/*   ngOnInit() {
    this.api.getClothing().subscribe(clothing => {
        this.clothing = clothing;
        console.log(this.clothing);
    })
  } */
}

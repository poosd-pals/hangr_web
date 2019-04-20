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

		filter() {
			/*this.api.getClothing().subscribe(data => {
	        this.closet = data.map(e => {
	            return {name: e.payload.doc.id,
	                    ...e.payload.doc.data()
	                } as ClothingItem;
	            });
	        });*/

			//alert('test');

			var filter = 'null';

			// Check what tag is clicked.
			if ((<HTMLInputElement>document.getElementById('Accessories')).checked) {
				filter = 'Accessory';
			}
			else if ((<HTMLInputElement>document.getElementById('Bags')).checked) {
				filter = 'Bag';
			}
			else if ((<HTMLInputElement>document.getElementById('Dresses')).checked) {
				filter = 'Dress';
			}
			else if ((<HTMLInputElement>document.getElementById('Intimates & Sleepwear')).checked) {
				filter = 'Intimates & Sleepwear';
			}
			else if ((<HTMLInputElement>document.getElementById('Jackets & Coats')).checked) {
				filter = 'Jackets & Coats';
			}
			else if ((<HTMLInputElement>document.getElementById('Jeans')).checked) {
				filter = 'Jeans';
			}
			else if ((<HTMLInputElement>document.getElementById('Jewelry')).checked) {
				filter = 'Jewelry';
			}
			else if ((<HTMLInputElement>document.getElementById('Pants')).checked) {
				filter = 'Pants';
			}
			else if ((<HTMLInputElement>document.getElementById('Shoes')).checked) {
				filter = 'Shoes';
			}
			else if ((<HTMLInputElement>document.getElementById('Shorts')).checked) {
				filter = 'Shorts';
			}
			else if ((<HTMLInputElement>document.getElementById('Skirts')).checked) {
				filter = 'Skirts';
			}
			else if ((<HTMLInputElement>document.getElementById('Sweaters')).checked) {
				filter = 'Sweater';
			}
			else if ((<HTMLInputElement>document.getElementById('Swim')).checked) {
				filter = 'Swim';
			}
			else if ((<HTMLInputElement>document.getElementById('Tops')).checked) {
				//alert("test again");
				filter = 'Shirt';
			}
			else if ((<HTMLInputElement>document.getElementById('Other')).checked) {
				filter = 'Other';
			}

			//alert(filter);

			for (var i = 0; i < this.closet.length; i++) {
				if (this.closet[i].category != filter) {
					this.closet.splice(i, 1);
					i--;
				}
			}
		}


}

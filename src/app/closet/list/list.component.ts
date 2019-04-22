import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../api/api.service';
import { ClothingItem } from '../clothing-model';
import { Constants } from '../../constants/constants';

import * as _ from 'lodash';
import { TagContentType } from '@angular/compiler';

export class Tag {
    name: string;

    constructor( name: string ) {
        this.name = name; }
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
    filled = false;

    // Empty array 'tags' of objects type 'Tag'
    tagsArray: Tag[];
    filteredTags: Tag[];

    // long text is the "add clothing" text when the button is expanded.
    addButtonLongText: boolean;

    // Set categories list to the ones defined in constants.
    categories = Constants.categories;

    // Empty array 'closet' of objects type 'ClothingItem'
    closet: ClothingItem[];
    filteredClothes: ClothingItem[];

    // Constructor sets the api to the one in ApiService.
    constructor( private api: ApiService ) {
        this.addButtonLongText = false;

        this.tagsArray = [];
        this.filteredTags = [];
    }

    // filter-able properties
    category: string;
    tags: string[];

    // Active filter rules
    filters = {}

    // Returns data from firebase mapped to an array of objects type 'ClothingItem'
    ngOnInit() {
        this.api.getClothing().subscribe(data => {
            this.closet = data.map(e => {
                return {id: e.payload.doc.id,
                        ...e.payload.doc.data()
                    } as ClothingItem;
                });
            this.applyFilters();
            this.tagFill();
            });
    }

    private tagFill() {
        if (typeof this.closet !== 'undefined' && this.filled === false) {
            this.filled = true;
            for (const item of this.closet) {
                for (const tag of item.tags) {
                    const tagInstance: Tag = { name: tag };
                    this.tagsArray.push(tagInstance);
                }
            }
        }
        console.log('Initialized ');
        this.filteredTags = _.cloneDeep(this.tagsArray);
        console.log('Filtered Array: ');
        console.log(this.filteredTags);
    }

    private tagUpdate() {
        let filteredArray: Tag[];
        filteredArray = [];
        for (const item of this.filteredClothes) {
            for (const tag of item.tags) {
                const tagInstance: Tag = { name: tag };
                filteredArray.push(tagInstance);
            }
        }
        return filteredArray;
    }

    private applyFilters() {
        this.filteredClothes = _.filter( this.closet, _.conforms(this.filters) );
        this.filteredTags = this.tagUpdate();
    }

    private applyTagFilters(tag: any) {
        this.filteredClothes = this.filteredClothes.filter(
            function(i) {
                let removetag;
                for (const x of i.tags) {
                    if (x === tag) {
                        console.log('Tag: ' + x);
                        removetag = true;
                    } 
                }
                if (!removetag){return i;}
                console.log('Filtered!');
            }
        );
    }

    /// filter property by equality to rule
    filterExact(property: string, rule: any) {
        this.filters[property] = val => val === rule;
        this.applyFilters();
    }

    removeFilters() {
        this.filteredClothes = this.closet;
        this.filteredTags = _.cloneDeep(this.tagsArray);
    }

    // Function to remove tag.
    remove(tag: Tag): void {
        const index = this.filteredTags.indexOf(tag);

        if (index >= 0) {
            this.filteredTags.splice(index, 1);
        }

        console.log('Original Array:');
        console.log(this.tagsArray);
        this.applyTagFilters(tag.name);
    }


/* 
    filter() {
        this.api.getClothing().subscribe(data => {
        this.closet = data.map(e => {
            return {name: e.payload.doc.id,
                    ...e.payload.doc.data()
                } as ClothingItem;
            });
        });

        var filter;

        // Check what tag is clicked.
        if ((<HTMLInputElement>document.getElementById('Accessories')).checked) {
            filter = 'Accessory';
        }
        else if ((<HTMLInputElement>document.getElementById('Bags')).checked) {
            filter = 'Bag';
        }
        else if ((<HTMLInputElement>document.getElementById('Dresses')).checked) {
            filter = 'Dresses';
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
        else if ((<HTMLInputElement>document.getElementById('Shirts')).checked) {
            filter = 'Shirt';
        }
        else if ((<HTMLInputElement>document.getElementById('Other')).checked) {
            filter = 'Other';
        } */

        /*for (var i = 0; i < this.closet.length; i++) {
            if (this.closet[i].category != filter) {
                this.closet.splice(i, 1);
                i--;
            }
        }
    }*/


}

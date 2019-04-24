import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../api/api.service';
import { ClothingService } from './../../api/clothing/clothing.service';
import { ClothingItem } from '../clothing-model';
import { Constants } from '../../constants/constants';

import * as _ from 'lodash';
import { TagContentType } from '@angular/compiler';

export interface ColorsBoolean {
    name: string;
    selected: boolean;
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

    // Check if list is loaded
    isLoaded: Promise<boolean>;

    // Controls Radio Buttons
    categoryModel = null;

    // Empty array 'tags' of objects type 'Tag'
    tagsArray: string[];
    filteredTags: string[];
    colorsBooleans: ColorsBoolean[];
    filteredColors: ColorsBoolean[];

    // long text is the "add clothing" text when the button is expanded.
    addButtonLongText: boolean;

    // Set categories list to the ones defined in constants.
    categories = Constants.categories;

    // Empty array 'closet' of objects type 'ClothingItem'
    closet: ClothingItem[] = [];
    filteredClothes: ClothingItem[];

    // Constructor sets the api to the one in ApiService.
    constructor( private api: ApiService, private clothingService: ClothingService ) {
        this.addButtonLongText = false;

        this.tagsArray = [];
        this.filteredTags = [];
        this.filteredColors = [];
        this.colorsBooleans = [];
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

            this.isLoaded = Promise.resolve(true);
            });
    }

    // Called when closet is initialized. Initialzes the tag array and the colors array.
    private tagFill() {
        if (typeof this.closet !== 'undefined' && this.filled === false) {
            this.filled = true;
            for (const item of this.closet) {
                for (const tag of item.tags) {
                    if (!this.tagsArray.includes(tag)) {
                        this.tagsArray.push(tag);
                    }
                }
                for (const color of item.colors) {
                    const colorInstance: ColorsBoolean = { name: color, selected: false };
                    let added = false;
                    for (const bool of this.colorsBooleans) {
                        if (bool.name === color) {
                            added = true;
                        }
                    }
                    if (!added) {
                        this.colorsBooleans.push(colorInstance);
                    }
                }
            }
        }
        this.filteredTags = _.cloneDeep(this.tagsArray);
        this.filteredColors = _.cloneDeep(this.colorsBooleans);
    }

    private tagUpdate() {
        const filteredArray: string[] = [];
        for (const item of this.filteredClothes) {
            for (const tag of item.tags) {
                if (!filteredArray.includes(tag)) {
                    filteredArray.push(tag);
                }
            }
        }
        return filteredArray;
    }

    private colorsUpdate() {
        const filteredArray: ColorsBoolean[] = [];
        for (const item of this.filteredClothes) {
            for (const color of item.colors) {
                const colorInstance: ColorsBoolean = { name: color, selected: false };
                let added = false;
                for (const bool of filteredArray) {
                    if (bool.name === color) {
                        added = true;
                        console.log('Array has this color.');
                    }
                }
                if (!added) {
                    filteredArray.push(colorInstance);
                    console.log('Pushing ' + color);
                }
            }
        }
        console.log(filteredArray);
        return filteredArray;
        
    }

    private applyFilters() {
        this.filteredClothes = _.filter( this.closet, _.conforms(this.filters) );
        this.filteredTags = _.cloneDeep(this.tagUpdate());
        this.filteredColors = _.cloneDeep(this.colorsUpdate());
    }

    private applyTagFilters(tag: any) {
        this.filteredClothes = this.filteredClothes.filter(
            function(i) {
                let removetag;
                for (const x of i.tags) {
                    if (x === tag) {
                        removetag = true;
                    }
                }
                if (!removetag) { return i; }
            }
        );
    }

    private applyColorFilters(color: any) {
        this.filteredClothes = this.filteredClothes.filter(
            function(i) {
                for (const x of i.colors) {
                    if (x === color) {
                        return i;
                    }
                }
            }
        );
    }

    // Filter for filtering clothing by category.
    filterExact(property: string, rule: any) {
        this.filters[property] = val => val === rule;
        this.applyFilters();
    }

    removeFilters() {
        this.filteredClothes = this.closet;
        this.filteredTags = _.cloneDeep(this.tagsArray);
        this.filteredColors = _.cloneDeep(this.colorsBooleans);

        this.resetRadioButtons();
    }

    // Function to remove tag.
    remove(tag: string): void {
        const index = this.filteredTags.indexOf(tag);

        if (index >= 0) {
            this.filteredTags.splice(index, 1);
        }

        this.applyTagFilters(tag);
    }

    selectColor(color: string): void {
        for (const items of this.filteredColors) {
            if (items.name === color) {
                items.selected = true;
            }
        }
        this.applyColorFilters(color);
    }

    goToEdit(currentClothing: ClothingItem) {
        this.clothingService.passDataToEdit(currentClothing);
    }

    resetRadioButtons() { this.categoryModel = null; }

}

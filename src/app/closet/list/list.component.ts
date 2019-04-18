import { Clothing } from './../clothing';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

    // long text is the "add clothing" text when the button is expanded.
    addButtonLongText: boolean;
    clothing: Object;

    // Empty array 'closet'.
    closet: any[] = [];

    categories = ['Accessories', 'Bags', 'Dresses', 'Intimates & Sleepwear', 
        'Jackets & Coats', 'Jeans', 'Jewelry', 'Pants', 'Shoes', 'Shorts', 'Skirts', 'Sweaters', 'Swim', 'Tops', 'Other'];

    constructor(private api: ApiService) {
        this.addButtonLongText = false;

        // Populates closet with call to api getClothing.
        this.closet = this.api.getClothing();
    }

    ngOnInit() {}

/*   ngOnInit() { 
    this.api.getClothing().subscribe(clothing => {
        this.clothing = clothing;
        console.log(this.clothing);
    })
  } */
}

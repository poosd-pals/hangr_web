import { Component, OnInit } from '@angular/core';
import { Constants } from './../constants/constants';
import { ClothingItem } from '../closet/clothing-model';
import { ApiService } from './../api/api.service';

@Component({
  selector: 'app-outfits',
  templateUrl: './outfits.component.html',
  styleUrls: ['./outfits.component.css']
})
export class OutfitsComponent implements OnInit {
  categories = Constants.categories;
  selectedCategory: string;

  showDropDown: boolean = true;

  clothesList;

  constructor(private api:ApiService) {
   }

  ngOnInit() {
  }

  filterByCategory()
  {
    this.showDropDown = false;

    this.clothesList = this.api.getClothing();

    console.log(this.clothesList);

    console.log("selected category: " + this.selectedCategory);
  }

  selectChangeHandler (event: any) {
    this.selectedCategory = event.target.value;
  }
}

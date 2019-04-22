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
  showFilteredList: boolean = false;
  showOutfitList: boolean = true;

  clothesList: ClothingItem[] = [];
  filteredList: ClothingItem[] = [];
  outfitList: ClothingItem[] = [];

  constructor(private api:ApiService) {
   }

  ngOnInit() {
    this.api.getClothing().subscribe(data => {
      this.clothesList = data.map(e => {
          return {id: e.payload.doc.id,
                  ...e.payload.doc.data()
              } as ClothingItem;
          });
          console.log(this.clothesList);
      });
  }

  // Adds clothingItems that match the current selected category to a filteredList.
  filterByCategory()
  {
    if  (this.selectedCategory == null)
      return;

    this.showDropDown = false;
    this.showOutfitList = false;

    // Make sure the filteredList is initially empty.
    this.filteredList = [];

    for (let clothingItem of this.clothesList)
    {
      if (clothingItem.category === this.selectedCategory)
      {
        this.filteredList.push(clothingItem);
      }
    }

    this.showFilteredList = true;
  }

  selectChangeHandler (event: any) {
    this.selectedCategory = event.target.value;
  }

  addToOutfit(clothingItem) {
    this.outfitList.push(clothingItem);

    for (let clothingItem of this.outfitList)
    console.log(clothingItem);

    this.showFilteredList = false;

    this.showDropDown = true;
    this.showOutfitList = true;

    this.selectedCategory = null;
  }

  wear() {
    
  }
}

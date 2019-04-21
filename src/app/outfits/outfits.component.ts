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

  clothesList: ClothingItem[];

  constructor(private api:ApiService) {
   }

  ngOnInit() {
  }

  filterByCategory()
  {
    if  (this.selectedCategory == null)
      return;

    this.showDropDown = false;

    this.api.getClothing().subscribe(data => {
      this.clothesList = data.map(e => {
          return {name: e.payload.doc.id,
                  ...e.payload.doc.data()
              } as ClothingItem;
          });
      });

    

    console.log("selected category: " + this.selectedCategory);
  }

  selectChangeHandler (event: any) {
    this.selectedCategory = event.target.value;
  }
}

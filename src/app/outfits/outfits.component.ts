import { Component, OnInit } from '@angular/core';
import { Constants } from './../constants/constants';
import { ClothingItem } from '../closet/clothing-model';

@Component({
  selector: 'app-outfits',
  templateUrl: './outfits.component.html',
  styleUrls: ['./outfits.component.css']
})
export class OutfitsComponent implements OnInit {
  categories = Constants.categories;

  constructor() {
   }

  ngOnInit() {
  }

}

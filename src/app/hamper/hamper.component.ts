import { Component, OnInit } from '@angular/core';

import { ClothingService } from './../api/clothing/clothing.service';
import { HamperService } from './../api/hamper/hamper.service';
import { ClothingItem } from './../closet/clothing-model';

@Component({
  selector: 'app-hamper',
  templateUrl: './hamper.component.html',
  styleUrls: ['./hamper.component.css']
})
export class HamperComponent implements OnInit {

  currentDocRef = null;
  clothingItems = [];

  isLoaded: Promise<boolean>;

  constructor(private hamperService: HamperService) {
  }

  ngOnInit() {
    this.hamperService.getHamper().subscribe(data => {
        this.clothingItems = data.map(e => {
            return {id: e.payload.doc.id,
                    ...e.payload.doc.data()
                } as ClothingItem;
            });

          this.isLoaded = Promise.resolve(true);
        });

    // To access hamper item data, it is this.clothingItems[i].data. Then use . operator to access fields
/*     this.hamperService.getHamper().subscribe(data => {
      data.map(dca => {
        this.clothingItems.push(dca.payload.doc);
      });
      console.log(this.clothingItems);

    }); */
    // var hamperItems = [];
    // this.hamperService.getHamper().subscribe(data => {
    //   data.map((item) => {
    //     hamperItems.push(item);
    //     console.log(item);
    //   })
    // })
  }

  clean(item){
    this.hamperService.cleanItem(item);
  }
}
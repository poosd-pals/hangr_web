import { Component, OnInit } from '@angular/core';

import { ClothingService } from './../api/clothing/clothing.service';
import { HamperService } from './../api/hamper/hamper.service';

@Component({
  selector: 'app-hamper',
  templateUrl: './hamper.component.html',
  styleUrls: ['./hamper.component.css']
})
export class HamperComponent implements OnInit {

  constructor(private hamperService: HamperService) {
  }

  ngOnInit() {
    var hamperItems = [];
    this.hamperService.getHamper().subscribe(data => {
      data.map((item) => {
        hamperItems.push(item);
        console.log(item);
      })
    })
  }

}

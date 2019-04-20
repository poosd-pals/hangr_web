import { FormGroup } from '@angular/forms';
import { Clothing } from './../closet/clothing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {

  }

    clothingList = [];

    CLOSET = [
        {name: 'White Shirt', category: 'Shirt', wearsBeforeWash: 10, colors: 'White', tags: 'blah',
            url: 'assets/tempImg/whiteshirt.jpg'},
        {name: 'Blue Dress', category: 'Dress', wearsBeforeWash: 10, colors: 'Blue', tags: 'blah',
            url: 'assets/tempImg/bluedress.jpg'},
        {name: 'Pink Shirt', category: 'Shirt', wearsBeforeWash: 10, colors: 'Pink', tags: 'blah',
            url: 'assets/tempImg/pinkshirt.jpg'},
        {name: 'White Shirt', category: 'Shirt', wearsBeforeWash: 10, colors: 'White', tags: 'blah',
            url: 'assets/tempImg/whiteshirt.jpg'},
        {name: 'Blue Dress', category: 'Dress', wearsBeforeWash: 10, colors: 'Blue', tags: 'blah',
            url: 'assets/tempImg//bluedress.jpg'},
        {name: 'Pink Shirt', category: 'Shirt', wearsBeforeWash: 10, colors: 'Pink', tags: 'blah',
            url: 'assets/tempImg/pinkshirt.jpg'}
    ];

  addClothing (clothingForm: FormGroup){
    // TODO: change URL
    this.http.post('https://my-json-server.typicode.com/winterchocolatte/demo/clothings',
    {
      name: clothingForm.controls['name'].value,
      category: clothingForm.controls['category'].value,
      wearsBeforeWash: clothingForm.controls['wearsBeforeWash'].value,
      colors : clothingForm.controls['colors'].value,
      tags: clothingForm.controls['tags'].value
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

  saveClothing (clothingForm: FormGroup) {
    this.http.post(this.apiURL + '/clothing/saveClothing',
    {
      name: clothingForm.controls['name'].value,
      category: clothingForm.controls['category'].value,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png',
      imageFilename: clothingForm.controls['image'],
      wearsBeforeWash: clothingForm.controls['wearsBeforeWash'].value,
      colors : clothingForm.controls['colors'].value,
      tags: clothingForm.controls['tags'].value
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

    getClothing() {
        return this.clothingList = this.CLOSET.slice(0);
    }

    // Jin
/*   getClothing(){
    // TODO: change this
    return this.http.get('https://my-json-server.typicode.com/winterchocolatte/demo/clothings');
  } */


}
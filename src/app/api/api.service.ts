import { FormGroup } from '@angular/forms';
import { Clothing } from './../closet/clothing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL: string = 'http://localhost:3000/closet/upload/api/';

  constructor(private http: HttpClient) {

  }

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

  getClothing(){
    // TODO: change this
    return this.http.get('https://my-json-server.typicode.com/winterchocolatte/demo/clothings');
  }


}
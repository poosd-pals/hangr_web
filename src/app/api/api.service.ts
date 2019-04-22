import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    // apiURL: string = 'http://localhost:3000/closet/upload/api/';

    constructor( private firestore: AngularFirestore ) {}

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

    addClothing(data) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('clothing')
                .add(data)
                .then(res => {}, err => reject(err));
        });
    }

    getClothing() {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        return this.firestore.collection('hangr').doc(currentUser.uid).collection('clothing_items').snapshotChanges();
    }



/*   addClothing (clothingForm: FormGroup){
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
  } */


    // Jin
/*   getClothing(){
    // TODO: change this
    return this.http.get('https://my-json-server.typicode.com/winterchocolatte/demo/clothings');
  } */


}
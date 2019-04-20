import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { ClothingItem } from '../clothing-model'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private firestore: AngularFirestore ) { }

  shirt: ClothingItem = { name: 'Toxicable', category: 'Shirt', colors: ['Black'],
    wearsTotal: 2, wearsLeft: 1, tags: ['hello', 'mylady'], imgPath: 'Stuff'} ;

    createClothingItem(data) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('clothing')
                .add(data)
                .then(res => {}, err => reject(err));
        });
    }


    getClothingItems() {
        return this.firestore.collection('clothing').snapshotChanges();
    }

  ngOnInit() {
  }

}

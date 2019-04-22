import { Injectable } from '@angular/core';
import {
  AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from  'firebase';
import { auth } from  'firebase/app';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// export interface ClothingItem { 
//   name: string;
//   category: string;
//   imageUrl: string;
//   imageFilename: string;
//   wearsBeforeWash: number;
//   wearsLeft: number;
//   tags: [string];
//   colors: [string];
// }
export class ClothingService {
  private currentUser;
  // private db = firebase.firestore();
  // accountLogs: Observable<ClothingItemId[]>;
  constructor(private firestore: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // this.clothingItemCollection = afs.collection<ClothingItem>('clothing');
  }

  uploadClothing(data) {
    
  }

  deleteClothing(data) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items').doc(data.clothingItem.id).delete()
          .then(res => {}, err => reject(err));

    });
  }

  saveClothing(data) {
    console.log(data.imageUrl);
    if (data.clothingItem.id == null || data.clothingItem.id.length == 0) {
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items')
            .add({
              name: data.clothing.name,
              category: data.clothing.category,
              imageUrl: data.imageUrl,
              imageFilename: data.imageFilename,
              wearsTotal: parseInt(data.clothing.wearsTotal),
              wearsLeft: parseInt(data.clothing.wearsLeft),
              colors: data.clothing.colors,
              tags: data.clothing.tags
            })
            .then(res => {}, err => reject(err));

      });
    }
    else {
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items').doc(data.clothingItem.id).update({
              name: data.clothing.name,
              category: data.clothing.category,
              imageUrl: data.imageUrl,
              imageFilename: data.imageFilename,
              wearsTotal: parseInt(data.clothing.wearsTotal),
              colors: data.clothing.colors,
              tags: data.clothing.tags
          })
          .then(res => {}, err => reject(err));

      });
    }
  }
}

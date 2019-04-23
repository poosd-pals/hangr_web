import { Injectable } from '@angular/core';
import {
  AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from  'firebase';
import { auth } from  'firebase/app';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { ClothingItem } from 'src/app/closet/clothing-model';

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
  private editClothing: ClothingItem = null;

  constructor(private firestore: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // this.clothingItemCollection = afs.collection<ClothingItem>('clothing');
  }

  uploadClothing(data) {
    
  }

  passDataToEdit(currentClothing: ClothingItem) {
    console.log("current clothing: ");
    console.log(currentClothing);

    this.editClothing = currentClothing;
  }

  getEditClothing() {
    return this.editClothing;
  }

  deleteClothing(data) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items').doc(data.id).delete()
          .then(res => {}, err => reject(err));

    });
  }

  saveClothing(data) {
    console.log(data.imageUrl);
    if (data.imageUrl == undefined || data.imageUrl == null || data.imageUrl.length == 0) {
      data.imageUrl = 'assets/image-placeholder.jpg';
      data.imageFilename = 'image-placeholder.jpg';
    }
    if (data.clothing.id == null || data.clothing.id.length == 0) {
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items')
            .add({
              dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
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
      if (data.imageUrl == undefined || data.imageUrl == null || data.imageUrl.length == 0) {
        data.imageUrl = 'assets/image-placeholder.jpg';
        data.imageFilename = 'image-placeholder.jpg';
      }
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items').doc(data.clothing.id).update({
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

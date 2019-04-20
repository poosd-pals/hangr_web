import { Injectable } from '@angular/core';
import {
  AngularFirestore, AngularFirestoreCollection
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
    this.currentUser = localStorage.getItem('user');
    // this.clothingItemCollection = afs.collection<ClothingItem>('clothing');
  }

  uploadClothing(data) {
    
  }

  saveClothing(data) {
    if (data.docRef == null) {
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection('clothing')
            .add({
              uid: this.currentUser.uid,
              // dateCreated: new Date(),
              name: data.clothing.name,
              category: data.clothing.category,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png',
              imageFilename: 'new.png',
              wearsTotal: data.clothing.wearsTotal,
              wearsLeft: data.clothing.wearsTotal,
              colors: data.clothing.colors,
              tags: data.clothing.tags
            })
            .then(res => {}, err => reject(err));

      });
    }
    else {
      return new Promise<any>((resolve, reject) =>{
        data.docRef.update({
          uid: this.currentUser.uid,
              name: data.clothing.name,
              category: data.clothing.category,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png',
              imageFilename: 'new.png',
              wearsTotal: data.clothing.wearsTotal,
              colors: data.clothing.colors,
              tags: data.clothing.tags
          })
          .then(res => {}, err => reject(err));

      });
    }
  }
}

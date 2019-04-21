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
export class OutfitsService {
  private currentUser;
  constructor(private firestore: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  saveOutfit(data) {
    //validate clothing
    var localClothingItems = [];
    data.clothingRefs.map(clothingRef => {
      this.firestore.collection('clothing').doc(clothingRef.id).get().subscribe(data => {
        localClothingItems.push(clothingRef.id);
      }, error => console.log('no such doc'));
    });
    if (data.docRef == null) {
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection('outfits')
            .add({
              uid: this.currentUser.uid,
              // dateCreated: new Date(),
              name: data.name,
              clothingItems: localClothingItems,
              favorite: data.favorite
            })
            .then(res => {}, err => reject(err));

      });
    }
    else {
      return new Promise<any>((resolve, reject) =>{
        data.docRef.update({
          uid: this.currentUser.uid,
          // dateCreated: new Date(),
          name: data.name,
          clothingItems: localClothingItems,
          favorite: data.favorite
        })
        .then(res => {}, err => reject(err));
      });
    }
  }

  deleteOutfit(data) {
    return new Promise<any>((resolve, reject) =>{
      data.docRef.delete()
          .then(res => {}, err => reject(err));

    });
  }

  wearOutfit(data) {
    data.clothingRefs.map(clothingRef => {
      this.firestore.collection('clothing').doc(clothingRef.id).get().subscribe(data => {
        var clothingData = data.data();
        this.firestore.collection('clothing').doc(clothingRef.id).ref.update({
          wearsLeft: clothingData.wearsLeft > 0 ? clothingData.wearsLeft - 1 : -1
        })
      })
    });
  }
}

import { Injectable } from '@angular/core';
import {
  AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from  'firebase';
import { auth } from  'firebase/app';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
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
    data.outfitList.map(clothingItem => {
      this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items').doc(clothingItem.id).get().subscribe(data => {
        localClothingItems.push(clothingItem.id);
      }, error => console.log('no such doc'));
    });
    if (data.outfit.id == null || data.outfit.id.length == 0) {
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection('hangr').doc(this.currentUser.uid).collection('outfits')
            .add({
              dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
              name: data.name,
              clothingItems: localClothingItems,
              favorite: data.favorite
            })
            .then(res => {}, err => reject(err));

      });
    }
    else {
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection('hangr').doc(this.currentUser.uid).collection('outfits').doc(data.outfit.id).update({
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
      this.firestore.collection('hangr').doc(this.currentUser.uid).collection('outfits').doc(data.id).delete()
          .then(res => {}, err => reject(err));

    });
  }

  wearOutfit(data) {
    data.outfitList.map(clothingItem => {
      this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items').doc(clothingItem.id).get().subscribe(data => {
        var clothingData = data.data();
        var newWearsLeft = clothingData.wearsLeft;
        if (newWearsLeft > 0) {
          newWearsLeft = newWearsLeft - 1;
        }
        this.firestore.collection('hangr').doc(this.currentUser.uid).collection('clothing_items').doc(clothingItem.id).update({
          wearsLeft: newWearsLeft
        })
      })
    });
  }
}

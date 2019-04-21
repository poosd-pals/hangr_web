import { Injectable } from '@angular/core';
import {
  AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from  'firebase';
import { auth } from  'firebase/app';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HamperService {
  private currentUser;
  // private db = firebase.firestore();
  // accountLogs: Observable<ClothingItemId[]>;
  constructor(private firestore: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // this.clothingItemCollection = afs.collection<ClothingItem>('clothing');
  }

  getHamper() {
      var dirtyClothes = [];
      return this.firestore.collection('clothing', ref => ref.where('wearsLeft', '==', 0).where('uid', '==', this.currentUser.uid)).snapshotChanges();
  }

  cleanItem(docRefData) {
    var docData;
    var self = this;
     this.firestore.collection('clothing').doc(docRefData.id).snapshotChanges().subscribe(data=> {
       docData = data.payload.data();
       this.firestore.collection('clothing').doc(docRefData.id).update({
         wearsLeft: docData.wearsTotal
      });
      
     });
  }
}

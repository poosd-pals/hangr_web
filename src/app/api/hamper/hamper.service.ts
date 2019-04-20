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
export class HamperService {
  private currentUser;
  // private db = firebase.firestore();
  // accountLogs: Observable<ClothingItemId[]>;
  constructor(private firestore: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // this.clothingItemCollection = afs.collection<ClothingItem>('clothing');
  }

  getHamper() {
    return new Promise<any>((resolve, reject) =>{
      this.firestore.collection('clothing', ref => ref.where('wearsLeft', '==', 0).where('uid', '==', this.currentUser.uid))
      .snapshotChanges()
      .subscribe(res => {}, err => reject(err));
    });
  }
}

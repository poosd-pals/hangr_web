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
export class ClosetService {

  constructor(private firestore: AngularFirestore) { }

  getCleanClothing() {
    var currentUser = JSON.parse(localStorage.getItem('user'));
        return this.firestore.collection('hangr').doc(currentUser.uid).collection('clothing_items', ref => ref.where('wearsLeft', '>', 0)).snapshotChanges();
  }
}

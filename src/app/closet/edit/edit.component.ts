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

  constructor(  ) { }

  ngOnInit() {
  }

}

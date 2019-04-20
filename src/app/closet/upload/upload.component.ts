import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

import { ApiService } from './../../api/api.service';
import { ClothingService } from './../../api/clothing/clothing.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

import { ClothingItem } from './../clothing-model';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  // clothing instance
  clothing: ClothingItem;

  // drop down list categories
  categories = Constants.categories;
  selectedCategory: string = '';
  
  // form stuff
  clothingForm: FormGroup;
  submitted = false;
  success = false;

  // chips stuff
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  currentDocRef = null;

  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;
  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  // Enter, comma
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  // Array for the chips - tags and colors
  tags = [];
  colors = [];

  // Default image
  imgUrl: String = "../../../assets/image-upload-icon.png";

  constructor(private api: ApiService, private fb: FormBuilder, 
    private clothingService: ClothingService, private router: Router) { 
    this.clothingForm = this.fb.group({
      name: ['', Validators.required],
      wearsBeforeWash: ['', Validators.required],
      colors: [],
      tags: []
    });

    // Instantiate instance of clothing
    this.clothing = {
      name: '',
      category: '',
      wearsTotal: 1,
      wearsLeft: 1,
      tags: [],
      colors: [],
      imgPath: ''
    }
  }

  ngOnInit() {
  }

  selectChangeHandler (event: any) {
    this.selectedCategory = event.target.value;
  }

  processFile(imageFile: any){
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.imgUrl = event.target.result;
      }
      reader.readAsDataURL((<HTMLInputElement>event.target).files[0]);
    //   const file = (<HTMLInputElement>event.target).files[0];

    //   var currentUser = JSON.parse(localStorage.getItem('user'));

    //   const path = `${currentUser.uid}/${new Date().getTime()}_${file.name}`;
    //   if (file.type.split('/')[0] !== 'image') { 
    //     console.error('unsupported file type :( ')
    //     return;
    //   }

      //this.afStorage.upload('/upload/to/this-path', (<HTMLInputElement>event.target).files[0]);
      console.log((<HTMLInputElement>event.target).files[0]);
  }
  }

  onSubmit(tags, colors) {
    this.submitted = true;

    if (this.clothingForm.invalid){
        return;
    }

    console.log(this.clothingForm);

    this.clothingForm.patchValue({ colors: this.colors.map(color => color.name) });
    this.clothingForm.patchValue({ tags: this.tags.map(tag => tag.name) });

    console.log(this.clothingForm.value);

    this.success = true;

    // TODO: Make this into a for loop for readability. Maybe.
    this.clothing.name = this.clothingForm.controls['name'].value;
    this.clothing.category = this.selectedCategory;
    this.clothing.wearsTotal = this.clothingForm.controls['wearsBeforeWash'].value;
    this.clothing.wearsLeft = this.clothing.wearsTotal;
    this.clothing.tags = this.clothingForm.controls['tags'].value;
    this.clothing.colors = this.clothingForm.controls['colors'].value;

    console.log("this.clothing value: " + JSON.stringify(this.clothing));

    this.clothingService.saveClothing({
      docRef: this.currentDocRef,
      clothing: this.clothing
    });

    // TODO: Send to Firebase
    console.log("form submitted!");

    this.router.navigate(['/closet/list']);
  }

  // Chip functions
  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add a new tag
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  addColor(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add a new color
    if ((value || '').trim()) {
      this.colors.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeColor(color): void {
    const index = this.colors.indexOf(color);

    if (index >= 0) {
      this.colors.splice(index, 1);
    }
  }
}


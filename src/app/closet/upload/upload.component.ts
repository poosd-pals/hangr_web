import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from './../../api/api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  clothingForm: FormGroup;
  submitted = false;
  success = false;

  imgUrl: String = "../../../assets/image-upload-icon.png";

  constructor(private api: ApiService, private fb: FormBuilder) { 
    this.clothingForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      wearsBeforeWash: ['', Validators.required],
      colors: ['', Validators.required],
      tags: ['']
    });
  }

  ngOnInit() {
  }

  updateImage(Event:any){
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.imgUrl = event.target.result;
      }
      reader.readAsDataURL((<HTMLInputElement>event.target).files[0]);
  }
  }

  onSubmit() {
    this.submitted = true;

    if (this.clothingForm.invalid){
        return;
    }

    console.log(this.clothingForm);

    this.api.addClothing(this.clothingForm);

    this.success = true;

    // TODO: Send to Firebase
    console.log("form submittd!");
  }
}


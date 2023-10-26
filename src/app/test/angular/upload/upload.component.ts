import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  files: any;
  submitted = false;
  form: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }


  createForm() {
    this.form = this.formBuilder.group({
      image: [null, Validators.required],
    });
  }


  ngOnInit(): void {
    this.createForm();
  }


  get f() {
    return this.form.controls;
  }


  uploadImage(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.files && event.target.files.length > 0) {
        this.files = event.target.files[0];
        console.log(this.files);
      } else {
        console.log('no se selecciono ningun archivo');
      }
    }
  }


  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  }


}

import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Upload } from 'src/app/models/upload.model';
import { UploadService } from 'src/app/services/upload.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-file',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './update-file.component.html',
  styleUrl: './update-file.component.css',
})
export class UpdateFileComponent {
  listCategories: any = [];
  files: any;
  submitted = false;
  data: any;
  form: FormGroup = new FormGroup({});
  urlRaiz = environment.urlRaiz + '/';
  post = new Upload();
  constructor(
    private formBuilder: FormBuilder,
    private dataService: UploadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadCategories();
  }

  loadCategories() {
    return this.dataService.getCategories().subscribe((data: {}) => {
      console.log(data);
      this.listCategories = data;
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      image: [null, Validators.required],
    });
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

    const formData = new FormData();
    formData.append('nombre', this.files, this.files.name);

    this.dataService.uploadData(formData).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.alerta();
    });
  }

  onEdit(category: Upload) {
    console.log(category);
    this.dataService.selectCategory = Object.assign({}, category);
    this.router.navigate(['/admin/update/file']);
  }

  alerta() {
    Swal.fire({
      icon: 'success',
      title: 'Imagen subida',
    });
  }
}

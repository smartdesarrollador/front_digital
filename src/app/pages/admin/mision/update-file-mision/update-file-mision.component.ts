import { Component, OnInit } from '@angular/core';
import { MisionService } from 'src/app/services/mision.service';
import { Mision } from 'src/app/models/mision';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-file-mision',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './update-file-mision.component.html',
  styleUrl: './update-file-mision.component.css',
})
export class UpdateFileMisionComponent implements OnInit {
  datos_mision: any = [];
  urlRaiz = environment.urlRaiz + '/';
  files: any;
  submitted = false;
  data: any;
  form: FormGroup = new FormGroup({});
  id_medios: any = 1;

  constructor(
    private formBuilder: FormBuilder,
    public cs: MisionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadCategories();
  }

  loadCategories() {
    return this.cs.getCategories().subscribe((data: {}) => {
      console.log(data);
      this.datos_mision = data;
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
    formData.append('imagen_mision', this.files, this.files.name);

    formData.append('id_mision', this.id_medios);

    this.cs.updateData(formData).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.alerta();
    });
  }

  alerta() {
    Swal.fire({
      icon: 'success',
      title: 'Imagen subida',
    });
  }
}

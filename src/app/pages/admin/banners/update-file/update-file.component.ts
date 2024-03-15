import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Upload } from 'src/app/models/upload.model';
import { UploadService } from 'src/app/services/upload.service';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpClientModule,
} from '@angular/common/http';
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
export class UpdateFileComponent implements OnInit {
  imagenSeleccionada: File = new File([], '');
  respuestaImagen = new Upload();
  idImagen: number = 11;
  files: any;
  data: any;
  form: FormGroup = new FormGroup({});

  constructor(private dataService: UploadService) {}

  ngOnInit(): void {}

  seleccionarImagen(event: any): void {
    this.imagenSeleccionada = event.target.files[0];
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

  editarImagen(): void {
    /* if (!this.imagenSeleccionada || !this.idImagen) {
      return;
    }

    this.subirImagenService
      .editarImagen(this.idImagen, this.imagenSeleccionada)
      .subscribe((event: HttpEvent<any>) => {
        this.alerta();
      }); */

    const formData = new FormData();
    formData.append('nombre', this.files, this.files.name);

    this.dataService.updateData(this.idImagen, formData).subscribe((res) => {
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

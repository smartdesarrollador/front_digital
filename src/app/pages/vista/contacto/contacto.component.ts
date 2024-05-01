import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Observer } from 'rxjs';
/* import { ToastrService } from 'ngx-toastr'; */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  FormContacto: any = FormGroup;
  UrlEmail: string = environment.apiUrlEmailContacto;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient /* private Toastr: ToastrService */
  ) {
    this.FormContacto = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }
  EnviarEmail() {
    var formData: any = new FormData();
    formData.append('nombre', this.FormContacto.get('nombre').value);
    formData.append('correo', this.FormContacto.get('correo').value);
    formData.append('telefono', this.FormContacto.get('telefono').value);
    formData.append('asunto', this.FormContacto.get('asunto').value);
    formData.append('mensaje', this.FormContacto.get('mensaje').value);
    this.http.post(this.UrlEmail, formData).subscribe(
      (response) => {
        console.log(response);
        /* this.Toastr.success('Email enviado Exitosamente'); */
        this.alerta();
      },
      (error) => {
        console.log(error);
        /* this.Toastr.error('No se pudo enviar el email'); */
      }
    );
  }

  alerta() {
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
    });
  }
}

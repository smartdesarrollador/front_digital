import { Component } from '@angular/core';
import {
  NgForm,
  NgModel,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Empleador } from 'src/app/interface/empleador';
import { EmpleadorService } from 'src/app/services/empleador.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent {
  myForm: FormGroup;
  datosEmpleador: any = {};

  constructor(
    public empleadorService: EmpleadorService,
    private router: Router,
    private Toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      empleador: ['', Validators.required],
      ruc: ['', Validators.required],
      domicilio: ['', Validators.required],
      id_actividad_economica: ['', Validators.required],
      representante_legal: ['', Validators.required],
      dni_representante_legal: ['', Validators.required],
      cargo_representante_legal: ['', Validators.required],
      numero_partida_poderes: ['', Validators.required],
      numero_asiento: ['', Validators.required],
      oficina_registral: ['', Validators.required],
      numero_partida_registral: ['', Validators.required],
      /* fecha_inicio_actividades: ['', Validators.required], */
    });
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSubmit() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this.datosEmpleador = this.myForm.value;

      this.empleadorService
        .createEmpleador(this.datosEmpleador)
        .subscribe((response) => {
          /* this.router.navigate(['admin/contratacion/contrato/proceso_1']); */
          this.Toastr.success('Datos ingresados correctamente');
        });
    } else {
      this.Toastr.error('Por favor, completa todos los campos correctamente.');
    }
  }
}

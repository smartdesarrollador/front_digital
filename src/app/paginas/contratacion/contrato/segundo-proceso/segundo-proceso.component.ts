import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/interface/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-segundo-proceso',
  templateUrl: './segundo-proceso.component.html',
  styleUrls: ['./segundo-proceso.component.css'],
})
export class SegundoProcesoComponent {
  trabajador: string = '';
  apellido_paterno: string = '';
  apellido_materno: string = '';
  primer_nombre: string = '';
  segundo_nombre: string = '';

  datosTrabajador: Trabajador = {
    trabajador: '',
    apellido_paterno: '',
    apellido_materno: '',
    primer_nombre: '',
    segundo_nombre: '',
  };

  constructor(
    public trabajadorService: TrabajadorService,
    private router: Router
  ) {
    console.log(this.datosTrabajador);
  }

  submitForm(trabajadorForm: NgForm) {
    this.datosTrabajador.trabajador = this.primer_nombre;
    this.datosTrabajador.apellido_paterno = this.apellido_paterno;
    this.datosTrabajador.apellido_materno = this.apellido_materno;
    this.datosTrabajador.primer_nombre = this.primer_nombre;
    this.datosTrabajador.segundo_nombre = this.segundo_nombre;

    console.log(this.datosTrabajador);

    this.trabajadorService
      .createTrabajador(this.datosTrabajador)
      .subscribe((response) => {
        this.router.navigate(['/contratacion/contrato/proceso_1']);
      });
  }
}

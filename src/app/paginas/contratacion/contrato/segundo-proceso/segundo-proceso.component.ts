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
  numero_documento: string = '';
  fecha_nacimiento: string = '';
  ruc: string = '';
  direccion: string = '';
  referencia: string = '';
  telefono: string = '';
  celular: string = '';
  correo: string = '';
  id_empleador: number = 1;
  id_tipo_contrato: number = 1;
  fecha_estado: string = '';
  id_afp: number = 1;
  cuspp: string = '';
  es_discapacitado: string = '';
  es_sindicalizado: string = '';
  fecha_ingreso: string = '';
  fecha_egreso: string = '';
  fecha_baja: string = '';

  datosTrabajador: Trabajador = {
    trabajador: '',
    apellido_paterno: '',
    apellido_materno: '',
    primer_nombre: '',
    segundo_nombre: '',
    numero_documento: '',
    fecha_nacimiento: '',
    ruc: '',
    direccion: '',
    referencia: '',
    telefono: '',
    celular: '',
    correo: '',
    id_empleador: 1,
    id_tipo_contrato: 1,
    id_afp: 1,
    cuspp: '',
    es_discapacitado: '',
    es_sindicalizado: '',
    fecha_ingreso: '',
    fecha_egreso: '',
    fecha_baja: '',
  };

  constructor(
    public trabajadorService: TrabajadorService,
    private router: Router
  ) {
    console.log(this.datosTrabajador);
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /*   private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } */

  submitForm(trabajadorForm: NgForm) {
    this.datosTrabajador.trabajador = this.primer_nombre;
    this.datosTrabajador.apellido_paterno = this.apellido_paterno;
    this.datosTrabajador.apellido_materno = this.apellido_materno;
    this.datosTrabajador.primer_nombre = this.primer_nombre;
    this.datosTrabajador.segundo_nombre = this.segundo_nombre;
    this.datosTrabajador.numero_documento = this.numero_documento;
    this.datosTrabajador.fecha_nacimiento = this.fecha_nacimiento;
    this.datosTrabajador.ruc = this.ruc;
    this.datosTrabajador.direccion = this.direccion;
    this.datosTrabajador.referencia = this.referencia;
    this.datosTrabajador.telefono = this.telefono;
    this.datosTrabajador.celular = this.celular;
    this.datosTrabajador.correo = this.correo;
    this.datosTrabajador.id_empleador = this.id_empleador;
    this.datosTrabajador.id_tipo_contrato = this.id_tipo_contrato;
    this.datosTrabajador.fecha_estado = this.fecha_estado;
    this.datosTrabajador.id_afp = this.id_afp;
    this.datosTrabajador.cuspp = this.cuspp;
    this.datosTrabajador.es_discapacitado = this.es_discapacitado;
    this.datosTrabajador.es_sindicalizado = this.es_sindicalizado;
    this.datosTrabajador.fecha_ingreso = this.fecha_ingreso;
    this.datosTrabajador.fecha_egreso = this.fecha_egreso;
    this.datosTrabajador.fecha_baja = this.fecha_baja;

    console.log(this.datosTrabajador);

    this.trabajadorService
      .createTrabajador(this.datosTrabajador)
      .subscribe((response) => {
        this.router.navigate(['/contratacion/contrato/proceso_1']);
      });
  }
}

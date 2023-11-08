import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-septimo-proceso',
  templateUrl: './septimo-proceso.component.html',
  styleUrls: ['./septimo-proceso.component.css'],
})
export class SeptimoProcesoComponent {
  selectedValue: string = '';
  datosLocales: any = {};
  @ViewChild('form1', { static: true }) form1: any;

  fechaActual = new Date();
  remuneracion: string = '';
  duracion_contrato: number;
  fecha_periodo: string = '';

  //declarar dia mes y año de fechaActual
  dia = this.fechaActual.getDate();
  mes = this.fechaActual.getMonth() + 1;
  anio = this.fechaActual.getFullYear();

  //declarar variable para almacenar la fecha actual con el formato dd/MM/yyyy
  fechaActualFormato: string = this.dia + '/' + this.mes + '/' + this.anio;
  fechaRenovacion: string = '';

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {
    this.duracion_contrato = 2;
  }

  ngOnInit() {
    this.asignarFechaRemuneracion();
  }

  procesarFecha(): void {
    let fechaFormateada: string;

    if (this.fecha_periodo === 'Año') {
      fechaFormateada = this.formatearFecha(
        this.sumarAnios(this.duracion_contrato)
      );
    } else if (this.fecha_periodo === 'Mes') {
      fechaFormateada = this.formatearFecha(
        this.sumarMeses(this.duracion_contrato)
      );
    } else {
      fechaFormateada = this.formatearFecha(
        this.sumarDias(this.duracion_contrato)
      );
    }

    this.fechaRenovacion = fechaFormateada;
  }

  sumarDias(dias: number) {
    const fecha = new Date(this.fechaActual);
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  sumarMeses(meses: number) {
    const fecha = new Date(this.fechaActual);
    fecha.setMonth(fecha.getMonth() + meses);
    return fecha;
  }

  sumarAnios(anios: number) {
    const fecha = new Date(this.fechaActual);
    fecha.setFullYear(fecha.getFullYear() + anios);
    return fecha;
  }

  formatearFecha(fecha: Date): string {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript empiezan en 0
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  }

  asignarFechaRemuneracion(): void {
    const contratoLocal = this.cl.getItem('contratoLocal');

    if (contratoLocal) {
      this.datosLocales = contratoLocal;
      if (this.datosLocales.fecha_inicio) {
        this.fechaActualFormato = this.datosLocales.fecha_inicio;
        this.fechaRenovacion = this.datosLocales.fecha_renovacion;
        this.remuneracion = this.datosLocales.remuneracion;
        this.fecha_periodo = this.datosLocales.duracion_contrato;
      } else {
        this.fechaActualFormato = this.dia + '/' + this.mes + '/' + this.anio;
        this.fechaRenovacion = '';
        this.remuneracion = '';
        this.fecha_periodo = '';
      }
    }
  }

  saveToLocalStorage() {
    if (this.form1.form.valid) {
      const contratoLocaldatos = this.cl.getItem('contratoLocal');
      contratoLocaldatos.fecha_inicio = this.fechaActualFormato;
      contratoLocaldatos.fecha_renovacion = this.fechaRenovacion;
      contratoLocaldatos.remuneracion = this.remuneracion;
      contratoLocaldatos.duracion_contrato =
        this.duracion_contrato + ' ' + this.fecha_periodo;

      this.cl.setItem('contratoLocal', contratoLocaldatos);

      this.router.navigate(['/contratacion/contrato/proceso_8']);
    } else {
      this.alerta();
    }
  }

  alerta() {
    Swal.fire({
      icon: 'error',
      title: 'Campos requeridos',
    });
  }
}

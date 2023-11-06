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
  duracion_contrato: number = 1;
  fecha_periodo: string = '';

  //declarar dia mes y año de fechaActual
  dia = this.fechaActual.getDate();
  mes = this.fechaActual.getMonth() + 1;
  anio = this.fechaActual.getFullYear();

  //declarar variable para almacenar la fecha actual con el formato dd/MM/yyyy
  fechaActualFormato: string = this.dia + '/' + this.mes + '/' + this.anio;
  fechaRenovacion: string = this.dia + '/' + this.mes + '/' + (this.anio + 1);

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {}

  ngOnInit() {
    this.asignarFechaRemuneracion();
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
        this.fechaRenovacion =
          this.dia + '/' + this.mes + '/' + (this.anio + 1);
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
      title: 'Requiere seleccionar por favor',
    });
  }
}

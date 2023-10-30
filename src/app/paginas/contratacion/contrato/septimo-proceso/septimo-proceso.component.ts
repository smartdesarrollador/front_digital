import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-septimo-proceso',
  templateUrl: './septimo-proceso.component.html',
  styleUrls: ['./septimo-proceso.component.css'],
})
export class SeptimoProcesoComponent {

  selectedValue: string = '';
  //declarar variable el cual se le da el valor de la fecha actual
  fechaActual = new Date();
  remuneracion: string = '';
  duracion_contrato: number = 1;
  fecha_periodo: string = '';

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) { }


  //declarar dia mes y año de fechaActual
  dia = this.fechaActual.getDate();
  mes = this.fechaActual.getMonth() + 1;
  anio = this.fechaActual.getFullYear();

  //declarar variable para almacenar la fecha actual con el formato dd/MM/yyyy
  fechaActualFormato: string = this.dia + '/' + this.mes + '/' + this.anio;
  fechaRenovacion: string = this.dia + '/' + this.mes + '/' + (this.anio + 1);

  saveToLocalStorage() {
    const contratoLocaldatos = this.cl.getItem('contratoLocal');
    contratoLocaldatos.fecha_inicio = this.fechaActualFormato;
    contratoLocaldatos.fecha_renovacion = this.fechaRenovacion;
    contratoLocaldatos.remuneracion = this.remuneracion;
    contratoLocaldatos.duracion_contrato = this.duracion_contrato + ' ' + this.fecha_periodo;


    this.cl.setItem('contratoLocal', contratoLocaldatos);

    /* localStorage.setItem('selectedValue', this.selectedValue); */

    this.router.navigate(['/contratacion/contrato/proceso_8']);
  }
}

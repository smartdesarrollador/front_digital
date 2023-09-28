import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sexto-proceso',
  templateUrl: './sexto-proceso.component.html',
  styleUrls: ['./sexto-proceso.component.css'],
})
export class SextoProcesoComponent {
  //declarar variable el cual se le da el valor de la fecha actual
  fechaActual = new Date();

  //declarar dia mes y año de fechaActual
  dia = this.fechaActual.getDate();
  mes = this.fechaActual.getMonth() + 1;
  anio = this.fechaActual.getFullYear();

  //declarar variable para almacenar la fecha actual con el formato dd/MM/yyyy
  fechaActualFormato: string = this.dia + '/' + this.mes + '/' + this.anio;
  fechaRenovacion: string = this.dia + '/' + this.mes + '/' + (this.anio + 1);
}

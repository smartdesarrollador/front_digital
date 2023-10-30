import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-septimo-proceso',
  templateUrl: './septimo-proceso.component.html',
  styleUrls: ['./septimo-proceso.component.css'],
})
export class SeptimoProcesoComponent {
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

import { Component } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-noveno-proceso',
  templateUrl: './noveno-proceso.component.html',
  styleUrls: ['./noveno-proceso.component.css'],
})
export class NovenoProcesoComponent {
  fiscalizacion_inmediata: boolean = false;
  jornada_maxima: boolean = false;

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {}

  ngOnInit() {}

  onCheckboxChange(checkboxName: string) {
    if (checkboxName === 'fiscalizacion_inmediata') {
      this.jornada_maxima = false; // Deseleccionar "¿El trabajador es de Dirección?"
    } else if (checkboxName === 'jornada_maxima') {
      this.fiscalizacion_inmediata = false; // Deseleccionar "¿El trabajador es de Confianza?"
    }
  }

  saveToLocalStorage() {
    const contratoLocaldatos = this.cl.getItem('contratoLocal');
    contratoLocaldatos.fiscalizacion_inmediata = this.fiscalizacion_inmediata;
    contratoLocaldatos.jornada_maxima = this.jornada_maxima;

    this.cl.setItem('contratoLocal', contratoLocaldatos);

    this.router.navigate(['/contratacion/contrato/proceso_10']);
  }
}

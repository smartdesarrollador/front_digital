import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-octavo-proceso',
  templateUrl: './octavo-proceso.component.html',
  styleUrls: ['./octavo-proceso.component.css']
})
export class OctavoProcesoComponent {
  trabajador_confianza: boolean = false;
  trabajador_direccion: boolean = false;


  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) { }

  ngOnInit() {

  }

  onCheckboxChange(checkboxName: string) {
    if (checkboxName === 'trabajador_confianza') {
      this.trabajador_direccion = false; // Deseleccionar "¿El trabajador es de Dirección?"
    } else if (checkboxName === 'trabajador_direccion') {
      this.trabajador_confianza = false; // Deseleccionar "¿El trabajador es de Confianza?"
    }
  }



  saveToLocalStorage() {
    const contratoLocaldatos = this.cl.getItem('contratoLocal');
    contratoLocaldatos.trabajador_confianza = this.trabajador_confianza;
    contratoLocaldatos.trabajador_direccion = this.trabajador_direccion;



    this.cl.setItem('contratoLocal', contratoLocaldatos);

    /* localStorage.setItem('selectedValue', this.selectedValue); */

    this.router.navigate(['/contratacion/contrato/proceso_9']);
  }





}

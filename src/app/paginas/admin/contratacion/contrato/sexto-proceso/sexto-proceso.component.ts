import { Component, OnInit, ViewChild } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sexto-proceso',
  templateUrl: './sexto-proceso.component.html',
  styleUrls: ['./sexto-proceso.component.css'],
})
export class SextoProcesoComponent implements OnInit {
  selectedValue: string = '';
  datosLocales: any = {};
  Swal = require('sweetalert2');
  @ViewChild('form1', { static: true }) form1: any;

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {}

  ngOnInit(): void {
    this.asignarOfertaLaboral();
  }

  asignarOfertaLaboral(): void {
    const contratoLocal = this.cl.getItem('contratoLocal');

    if (contratoLocal) {
      this.datosLocales = contratoLocal;
      if (this.datosLocales.oferta_laboral) {
        this.selectedValue = this.datosLocales.oferta_laboral;
      } else {
        this.selectedValue = '';
      }
    }
  }

  saveToLocalStorage() {
    if (this.form1.form.valid) {
      const contratoLocaldatos = this.cl.getItem('contratoLocal');
      contratoLocaldatos.oferta_laboral = this.selectedValue;

      this.cl.setItem('contratoLocal', contratoLocaldatos);

      /* localStorage.setItem('selectedValue', this.selectedValue); */

      this.router.navigate(['admin/contratacion/contrato/proceso_6_b']);
    } else {
      this.alerta();
    }
  }

  alerta() {
    Swal.fire({
      icon: 'error',
      title: 'Campo requerido',
    });
  }
}

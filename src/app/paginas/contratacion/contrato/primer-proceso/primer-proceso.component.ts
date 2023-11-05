import { Component, OnInit, ViewChild } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-primer-proceso',
  templateUrl: './primer-proceso.component.html',
  styleUrls: ['./primer-proceso.component.css'],
})
export class PrimerProcesoComponent {
  listTrabajadores: any = [];
  selectedValue: string = '';
  valorSeleccionado: any;
  datosLocales: any = {};
  Swal = require('sweetalert2');
  @ViewChild('form1', { static: true }) form1: any;

  /*  mostrar: boolean = false; */

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {}

  ngOnInit(): void {
    const contratoLocal = this.cl.getItem('contratoLocal');
    /* contratoLocal.nuevoValor = 'hola'; */

    if (contratoLocal) {
      this.datosLocales = contratoLocal;

      this.selectedValue = this.datosLocales.trabajador;
    }

    this.loadTrabajadores();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadTrabajadores() {
    return this.ts.getTrabajadores().subscribe((data: {}) => {
      console.log(data);
      this.listTrabajadores = data;
    });
  }

  saveToLocalStorage() {
    if (this.form1.form.valid) {
      if (this.cl.getItem('contratoLocal')) {
        const contratoLocaldatos = this.cl.getItem('contratoLocal');
        contratoLocaldatos.trabajador = this.selectedValue;

        this.cl.setItem('contratoLocal', contratoLocaldatos);
      } else {
        this.cl.setItem('contratoLocal', { trabajador: this.selectedValue });
      }

      /* localStorage.setItem('selectedValue', this.selectedValue); */
      this.router.navigate(['/contratacion/contrato/proceso_3']);
      // El formulario es válido, realiza la acción deseada.
      const formValue = this.form1.form.value;
      console.log('Valores del formulario:', formValue);
    } else {
      // El formulario no es válido, puedes mostrar una alerta o realizar otra acción de validación.
      this.alerta();
    }
  }

  alerta() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
}

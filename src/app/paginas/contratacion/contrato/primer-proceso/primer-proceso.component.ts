import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

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
    if (this.cl.getItem('contratoLocal')) {
      const contratoLocaldatos = this.cl.getItem('contratoLocal');
      contratoLocaldatos.trabajador = this.selectedValue;

      this.cl.setItem('contratoLocal', contratoLocaldatos);
    } else {
      this.cl.setItem('contratoLocal', { trabajador: this.selectedValue });
    }

    /* localStorage.setItem('selectedValue', this.selectedValue); */
    this.router.navigate(['/contratacion/contrato/proceso_3']);
  }
}

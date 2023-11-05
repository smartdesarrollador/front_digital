import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-tercer-proceso',
  templateUrl: './tercer-proceso.component.html',
  styleUrls: ['./tercer-proceso.component.css'],
})
export class TercerProcesoComponent {
  datosRecuperados: any;
  registroTrabajador: any;
  selectedValue: string = '';

  datosLocales: any = {};

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {
    // Recuperar datos del localStorage al inicializar el componente
    const datosGuardados = localStorage.getItem('selectedValue');
    if (datosGuardados) {
      this.datosRecuperados = datosGuardados;
    }
  }

  ngOnInit() {
    const contratoLocal = this.cl.getItem('contratoLocal');
    /* contratoLocal.nuevoValor = 'hola'; */

    console.log(contratoLocal);

    if (contratoLocal) {
      this.datosLocales = contratoLocal;

      this.selectedValue = this.datosLocales.jornada;
    }

    /* console.log(this.datosLocales); */

    this.getTrabajador(this.datosLocales.trabajador);

    /* console.log(this.datosLocales); */

    window.scrollTo({ top: 0, behavior: 'smooth' });

    console.log(this.datosLocales.trabajador + 'hola');
  }

  getTrabajador(id: any) {
    this.ts.getTrabajadorById(id).subscribe((data) => {
      console.log(data);
      this.registroTrabajador = data;
      // Realiza cualquier otra acción necesaria con los datos del trabajador
    });
  }

  saveToLocalStorage() {
    const contratoLocaldatos = this.cl.getItem('contratoLocal');
    contratoLocaldatos.jornada = this.selectedValue;

    this.cl.setItem('contratoLocal', contratoLocaldatos);
    this.router.navigate(['/contratacion/contrato/proceso_4']);
  }
}

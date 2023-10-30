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
  datosLocales: any = {};
  registroTrabajador: any;
  selectedValue: string = '';

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
    this.datosLocales = contratoLocal;

    /* console.log(this.datosLocales); */

    this.getTrabajador(this.datosLocales.trabajador);

    /* console.log(this.datosLocales); */
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

    /* localStorage.setItem('selectedValue', this.selectedValue); */
    if (this.selectedValue == 'Jornada Tiempo completo') {
      this.router.navigate(['/contratacion/contrato/proceso_4']);
    } else {
      console.log('Seleccionado: Jornada Tiempo Parcial');
    }
  }
}

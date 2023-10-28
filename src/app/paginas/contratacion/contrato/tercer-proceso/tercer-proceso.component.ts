import { Component, OnInit } from '@angular/core';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-tercer-proceso',
  templateUrl: './tercer-proceso.component.html',
  styleUrls: ['./tercer-proceso.component.css'],
})
export class TercerProcesoComponent {
  datosRecuperados: any;
  datosLocales: any = {};

  constructor(private cl: ContratoLocalStorageService) {
    // Recuperar datos del localStorage al inicializar el componente
    const datosGuardados = localStorage.getItem('selectedValue');
    if (datosGuardados) {
      this.datosRecuperados = datosGuardados;
    }
  }

  ngOnInit() {
    const contratoLocal = this.cl.getItem('contratoLocal');
    contratoLocal.nuevoValor = "hola";
    this.datosLocales = contratoLocal;

    console.log(this.datosLocales);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tercer-proceso',
  templateUrl: './tercer-proceso.component.html',
  styleUrls: ['./tercer-proceso.component.css'],
})
export class TercerProcesoComponent {
  datosRecuperados: any;

  constructor() {
    // Recuperar datos del localStorage al inicializar el componente
    const datosGuardados = localStorage.getItem('selectedValue');
    if (datosGuardados) {
      this.datosRecuperados = datosGuardados;
    }
  }
}
